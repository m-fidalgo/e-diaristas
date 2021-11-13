import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';

interface Coordinates {
  latitude: number;
  longitude: number;
}

export default function useFindByLocation() {
  const [automaticZipCode, setAutomaticZipCode] = useState('');
  const [coordinates, setCoordinates] = useState<Coordinates>();

  useEffect(() => {
    (async () => {
      try {
        const permission = await getPermission();
        if (permission) {
          setCoordinates(await getCoordinates());
        }
      } catch (error) {}
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        if (coordinates) {
          setAutomaticZipCode(await getZipCode());
        }
      } catch (error) {}
    })();
  }, [coordinates]);

  async function getPermission(): Promise<boolean> {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      return status === 'granted';
    } catch (error) {
      return false;
    }
  }

  async function getCoordinates(): Promise<Coordinates> {
    const location = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.Highest,
    });

    return location.coords;
  }

  async function getZipCode(): Promise<string> {
    if (coordinates) {
      const address = await Location.reverseGeocodeAsync(coordinates);
      if (address.length > 0) {
        return address[0].postalCode || '';
      }
    }

    return '';
  }

  return { automaticZipCode };
}
