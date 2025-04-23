from django.urls import path
from .views import (
    ProfileDataSectionListView,
    DoctorListView,
    MainClinicProfileListView,
    ClinicHighlightListView,
    BookingGuideVideoListView,
    VlogPostListView,
    TestimonialListView,
    ContactMessageCreateAPIView,
    TeamMemberListView,
    ApplicationRetrieveView
)

urlpatterns = [
    path('profile-data-section/', ProfileDataSectionListView.as_view(), name='profile-data-section-list-create'),
    path('doctor/', DoctorListView.as_view(), name='doctor-list-create'),
    path('main-clinic-profile/', MainClinicProfileListView.as_view(), name='main-clinic-profile-list-create'),
    path('clinic-highlight/', ClinicHighlightListView.as_view(), name='clinic-highlight-list-create'),
    path('booking-guide-video/', BookingGuideVideoListView.as_view(), name='booking-guide-video-list-create'),
    path('vlog-post/', VlogPostListView.as_view(), name='vlog-post-list-create'),
    path('testimonial/', TestimonialListView.as_view(), name='testimonial-list-create'),
    path('contact/', ContactMessageCreateAPIView.as_view(), name='contact-form'),
    path('team-members/', TeamMemberListView.as_view(), name='team-member-list'),
    path('application/', ApplicationRetrieveView.as_view(), name='application-detail'),


    # 🔐 We will use this code in future use for now its commented
    
    # path('accounts/', include('allauth.urls')),  
    # path('auth/', include('dj_rest_auth.urls')), 
    # path('auth/registration/', include('dj_rest_auth.registration.urls')),  
    
    # Website Url
]
