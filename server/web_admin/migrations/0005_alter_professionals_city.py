# Generated by Django 3.2.9 on 2021-11-11 17:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('web_admin', '0004_professionals_city'),
    ]

    operations = [
        migrations.AlterField(
            model_name='professionals',
            name='city',
            field=models.CharField(max_length=30),
        ),
    ]
