from django.db import models

class ProfileDataSection(models.Model):
    image1 = models.ImageField(upload_to='profile_images/')
    image2 = models.ImageField(upload_to='profile_images/')
    created_at = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return f"{self.id}"
    

class ClinicHighlight(models.Model):
    clinic_name = models.CharField(max_length=100, default="Lahore Clinic")
    location = models.CharField(max_length=100, default="Lahore")
    subtitle = models.CharField(max_length=255, default="Dedicated Mental Healthcare in Lahore")
    description = models.TextField(
        help_text="Paragraph describing the clinic's unique services and offerings."
    )
    main_image = models.ImageField(upload_to='clinics/')
    created_at = models.DateTimeField(auto_now_add=True)
    is_featured = models.BooleanField(default=True, help_text="Control whether this section appears on the frontend")

    def __str__(self):
        return f"{self.clinic_name}"
    

class Doctor(models.Model):
    clinic = models.ForeignKey(
        ClinicHighlight,
        on_delete=models.CASCADE,
        related_name='doctors',
        null=True, blank=True  # Optional link for now
    )
    name = models.CharField(max_length=100)
    position = models.CharField(max_length=100) 
    specialization = models.TextField(blank=True, null=True)
    image = models.ImageField(upload_to='doctors/', blank=True, null=True)
    contact_number = models.CharField(max_length=20, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
    

class Fee(models.Model):
    doctor = models.OneToOneField(Doctor, on_delete=models.CASCADE, related_name='fee')
    description = models.TextField(blank=True, null=True)  # e.g., For initial appointment
    amount = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    duration = models.CharField(max_length=50, blank=True, null=True)  # e.g., "20 min"
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.doctor.name} - {self.amount} for {self.duration}"
    

class License(models.Model):
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE, related_name='licenses')
    image = models.ImageField(upload_to='licenses/')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"License for {self.doctor.name}"

class Video(models.Model):
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE, related_name='videos')
    video = models.FileField(upload_to='videos/', help_text="Upload an MP4 video")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.doctor.name} - {self.video}"

    

class MainClinicProfile(models.Model):
    clinic = models.ForeignKey(
        ClinicHighlight,
        on_delete=models.CASCADE,
        related_name='clinic_profiles',
        null=True, blank=True 
    ) 
    doctor = models.OneToOneField(Doctor, on_delete=models.CASCADE, related_name='main_clinic_doc')
    doctor_name = models.CharField(max_length=255, blank=True, null=True)
    doctor_image = models.ImageField(upload_to='doctors/', blank=True, null=True)
    welcome_heading = models.CharField(max_length=255, default='Steps towards mental fitness')
    highlighted_text = models.CharField(max_length=255, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.id}" 


class BookingGuideVideo(models.Model):
    heading = models.CharField(max_length=100, default="Steps towards mental fitness")
    title = models.CharField(max_length=150, default="How to Book an Appointment")
    
    video = models.FileField(upload_to='videos/', help_text="Upload an MP4 video")
    
    is_active = models.BooleanField(default=True, help_text="Control whether this section appears on the frontend")

    uploaded_at = models.DateTimeField(auto_now_add=True)
    created_at = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return self.title
    

class VlogPost(models.Model):
    title = models.CharField(max_length=200)
    
    author = models.CharField(max_length=100)
    category = models.CharField(max_length=100)

    video = models.FileField(upload_to='vlog_videos/', blank=True, null=True, help_text="Upload a vlog video")
    date_published = models.DateField()
    
    content = models.TextField(help_text="Main content of the vlog post")

    is_active = models.BooleanField(default=True)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


class Testimonial(models.Model):
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='testimonials/')

    def __str__(self):
        return f"{self.name}"
    

class TeamMember(models.Model):
    name = models.CharField(max_length=100)
    role = models.CharField(max_length=100)
    image = models.ImageField(upload_to='team/')

    def __str__(self):
        return self.name
