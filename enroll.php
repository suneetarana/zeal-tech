<?php include'includes/header.php'; ?>


<section  class="register-form section-padding bg-light">
            <div class="container">

            <div class="row">
                
                <div class=" col-lg-8 offset-lg-2">
                <div class="contact-section">
                      <h2 class="section-sub-title">Enquiry Form</h2>
                      <p class=text-muted>Please contact us for any inquiries. We would love to assist you with any help.</p>
                      <form action="" class="contact-form">
       
                          <div class="form-group form-inline ">
                          <input type="text" name="name" class="form-control" placeholder="Your Name" value="" require>
                          <input type="email" name="txtEmail" class="form-control" placeholder="Your Email " value="" />
                          </div>

                          
                          <div class="form-group form-inline">
                              <input type="phone" name="txtPhone" class="form-control" placeholder="Your Phone Number" value="" />

                              <select class="form-control">
                                  <option value="">Select Course</option>
                                  <option value="">Web Designing</option>
                                  <option value="">Laravel</option>
                                  <option value="">Graphic Designing</option>
                                  <option value="">Wordpress Development</option>
                                  <option value="">Graphic Designing</option>


                              </select>
                              
                          </div>

                       
                          <div class="form-group">
                                <textarea name="text" class="form-control" placeholder="Your Message here" style=""></textarea>
                            </div>
                            <!-- <div class="form-group">
                              <input type="submit" name="btnSubmit" class="btnContact" value="Submit" />
                            </div> -->
                            <div class="animated-btn">
                                <a href="">Submit</a>
                            </div> 

                      </form>
                 </div> <!--  form end -->
                </div>

            </div>
            <!-- row -->
                 
            </div>
         
</section>

<?php include'includes/footer.php'; ?>
