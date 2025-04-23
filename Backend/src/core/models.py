from django.core.exceptions import ValidationError
from django.db import models

from phonenumber_field.modelfields import PhoneNumberField


class Application(models.Model):
    name = models.CharField(max_length=100, help_text='Application name', default='Zaala Society')
    short_name = models.CharField(max_length=10, help_text='Your application short name', default='ZS')
    tagline = models.CharField(
        max_length=100, help_text='Your application business line', default='will be update it soon'
    )
    description = models.TextField(
        default="will be update it soon",
        help_text='Application description'
    )

    logo = models.ImageField(
        upload_to='core/application/images', null=True, blank=True,
        help_text='Application real colors logo'
    )
   
    contact_email = models.EmailField(
        max_length=100, default='support@zaalasociety.com', help_text='Application contact email 1'
    )

    contact_phone = PhoneNumberField(
        help_text='Application contact phone 1', default='+923029677678'
    )

    address = models.CharField(
        max_length=255, help_text='office address', default='Mandian Abbottabad Near Comsats University'
    )
    latitude = models.DecimalField(max_digits=10, decimal_places=6, help_text='latitude', default=23.7)
    longitude = models.DecimalField(max_digits=10, decimal_places=6, help_text='longitude', default=90.3)

    terms_url = models.URLField(
        max_length=255, default='https://zaalasociety.com/terms-of-use/', help_text='Terms and Conditions page link'
    )

    version = models.CharField(max_length=10, help_text='Current version', default='1.0.0')
    is_active = models.BooleanField(default=True)
    created_on = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural = "Application"
        ordering = ['name']

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if Application.objects.exists() and not self.pk:
            raise ValidationError("Only one record allowed.")
        super(Application, self).save(*args, **kwargs)

class ContactMessage(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    subject = models.CharField(max_length=50)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.subject}"


class GalleryForm(models.Model):
    image = models.ImageField(upload_to='gallery/images', null=True, blank=True, help_text='Gallery Images')

