# Generated by Django 3.2.9 on 2021-11-10 23:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('web_admin', '0002_alter_professionals_zip_code'),
    ]

    operations = [
        migrations.AlterField(
            model_name='professionals',
            name='cpf',
            field=models.CharField(max_length=11, unique=True),
        ),
    ]
