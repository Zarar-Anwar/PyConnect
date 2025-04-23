from django.apps import AppConfig


class CoreConfig(AppConfig):
    name = 'src.services.doctors'
    verbose_name = 'Doctors'
    verbose_plural = 'Doctors'
    default_auto_config = 'django.db.models.BigAutoField'

    # def ready(self):
    #     import src.core.signals
