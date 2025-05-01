from django.core.exceptions import ValidationError
from django.db import models

from phonenumber_field.modelfields import PhoneNumberField


class Application(models.Model):
    name = models.CharField(max_length=100, help_text='Application name', default='Zaala Society')
    logo = models.ImageField(
        upload_to='core/application/images', null=True, blank=True,
        help_text='Application real colors logo'
    )
   
    contact_email = models.EmailField(
        max_length=100, default='support@zaalasociety.com', help_text='Application contact email 1'
    )

    contact_phone = models.CharField(
        max_length=100, help_text='Your application business line', default='will be update it soon'
    )

    address = models.CharField(
        max_length=255, help_text='office address', default='Mandian Abbottabad Near Comsats University'
    )

    facebook = models.URLField(max_length=255, blank=True, null=True, help_text='Facebook page URL')
    twitter = models.URLField(max_length=255, blank=True, null=True, help_text='Twitter profile URL')
    linkedin = models.URLField(max_length=255, blank=True, null=True, help_text='LinkedIn page URL')
    instagram = models.URLField(max_length=255, blank=True, null=True, help_text='Instagram profile URL')
    youtube = models.URLField(max_length=255, blank=True, null=True, help_text='YouTube channel URL')
  
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

