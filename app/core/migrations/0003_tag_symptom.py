# Generated by Django 3.0.7 on 2020-06-12 05:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_bookingevent_bookingrequest_symptom'),
    ]

    operations = [
        migrations.AddField(
            model_name='tag',
            name='symptom',
            field=models.ManyToManyField(to='core.Symptom'),
        ),
    ]
