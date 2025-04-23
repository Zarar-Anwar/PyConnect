from django.contrib import admin
from .models import (
    ProfileDataSection, Doctor, Fee, License, MainClinicProfile,
    ClinicHighlight, BookingGuideVideo, VlogPost, Testimonial,TeamMember
)

admin.site.register(TeamMember)
admin.site.register(ProfileDataSection)
admin.site.register(Doctor)
admin.site.register(Fee)
admin.site.register(License)
admin.site.register(MainClinicProfile)
admin.site.register(ClinicHighlight)
admin.site.register(BookingGuideVideo)
admin.site.register(VlogPost)
admin.site.register(Testimonial)