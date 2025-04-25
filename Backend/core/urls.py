
from django.contrib import admin
from django.urls import path, include, re_path
from django.views.static import serve
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from django.conf import settings
from django.conf.urls.static import static
from .settings import MEDIA_ROOT, STATIC_ROOT

schema_view = get_schema_view(
    openapi.Info(
        title="PSYCHOLGIST CONNECT API's",
        default_version="v1",
        description="API's for React application of Psychologist Connect website",
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email="support@zaalasociety.com"),
        license=openapi.License(name="BSD License"),
    ),
    public=True,
    # permission_classes=(permissions.AllowAny),
)

urlpatterns = [
    path('admin/', admin.site.urls),

]

urlpatterns += [
    re_path(r'^swagger(?P<format>\.json|\.yaml)$', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    path('', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('docs/redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),

    path('', include('src.api.urls'), name='api`s'),
]

# This line is sufficient for development to serve both media and static files
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
