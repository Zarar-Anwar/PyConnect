from django.db import models

class ProfileDataSection(models.Model):
    name = models.CharField(max_length=100)
    title = models.CharField(max_length=100, null=True)
    subtitle = models.CharField(max_length=100, null=True)
    designation = models.CharField(max_length=100)
    image1 = models.ImageField(upload_to='profile_images/')
    image2 = models.ImageField(upload_to='profile_images/')
    created_at = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return self.name

class Doctor(models.Model):
    name = models.CharField(max_length=100)
    position = models.CharField(max_length=100)  # e.g., Psychiatrist
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


class MainClinicProfile(models.Model):
    doctor_name = models.CharField(max_length=100)
    doctor_image = models.ImageField(upload_to='doctors/')
    experience_years = models.PositiveIntegerField()
    clinic_name = models.CharField(max_length=150)
    clinic_location = models.CharField(max_length=150, default='Peshawar')
    welcome_heading = models.CharField(max_length=255, default='Steps towards mental fitness')
    highlighted_text = models.CharField(max_length=255, blank=True, null=True)
    description1 = models.TextField(help_text="Introductory paragraph about the clinic")
    created_at = models.DateTimeField(auto_now_add=True)
    description2 = models.TextField(help_text="Details about therapy types offered")
    description3 = models.TextField(help_text="Details about services and accessibility")

    def __str__(self):
        return f"{self.clinic_name} - {self.doctor_name}"
    

class ClinicHighlight(models.Model):
    clinic_name = models.CharField(max_length=100, default="Lahore Clinic")
    location = models.CharField(max_length=100, default="Lahore")
    subtitle = models.CharField(max_length=255, default="Dedicated Mental Healthcare in Lahore")
    description = models.TextField(
        help_text="Paragraph describing the clinic's unique services and offerings."
    )
    
    main_image = models.ImageField(upload_to='clinics/')
    overlay_image = models.ImageField(upload_to='clinics/overlays/', blank=True, null=True)

    icon1_label = models.CharField(max_length=100, default="Certified Psychologists")
    icon1_icon = models.CharField(max_length=100, default="bi-person-check-fill")  # Bootstrap icon class
    icon2_label = models.CharField(max_length=100, default="Trusted by Lahore Families")
    icon2_icon = models.CharField(max_length=100, default="bi-emoji-smile")  # Bootstrap icon class
    created_at = models.DateTimeField(auto_now_add=True)

    doctor_name = models.CharField(max_length=100, default="Dr. Zarar Anwar")
    doctor_image = models.ImageField(upload_to='doctors/')
    doctor_title = models.CharField(max_length=150, default="Lahore’s Leading Mental Health Expert")
    is_featured = models.BooleanField(default=True, help_text="Control whether this section appears on the frontend")

    def __str__(self):
        return f"{self.clinic_name} - {self.doctor_name}"
    

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
    role = models.CharField(max_length=100)
    quote = models.TextField()
    image = models.ImageField(upload_to='testimonials/')

    def __str__(self):
        return f"{self.name} - {self.role}"
    

class TeamMember(models.Model):
    name = models.CharField(max_length=100)
    role = models.CharField(max_length=100)
    image = models.ImageField(upload_to='team/')

    def __str__(self):
        return self.name
