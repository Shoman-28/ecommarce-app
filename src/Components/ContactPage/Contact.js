import React from 'react';
import './Contact.css';
import {
    faMapMarkedAlt,
    faPhone,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSkype, faTwitter } from '@fortawesome/free-brands-svg-icons';
const Contact = () => {
    return (
		<section id="content">
			<div class="content-wrap">
				<div class="container clearfix">

					<div class="row align-items-stretch col-mb-50 mb-0">
						{/* -- Contact Form
						============================================= -- */}
						<div class="col-lg-6">

							<div class="fancy-title title-border">
								<h3>Send us an Email</h3>
							</div>

							<div class="form-widget">

								<div class="form-result"></div>

								<form class="mb-0" id="template-contactform" name="template-contactform" action="http://themes.semicolonweb.com/html/canvas/include/form.php" method="post">

									<div class="form-process">
										<div class="css3-spinner">
											<div class="css3-spinner-scaler"></div>
										</div>
									</div>

									<div class="row">
										<div class="col-md-4 form-group">
											<label for="template-contactform-name">Name <small>*</small></label>
											<input type="text" id="template-contactform-name" name="template-contactform-name" value="" class="sm-form-control required" />
										</div>

										<div class="col-md-4 form-group">
											<label for="template-contactform-email">Email <small>*</small></label>
											<input type="email" id="template-contactform-email" name="template-contactform-email" value="" class="required email sm-form-control" />
										</div>

										<div class="col-md-4 form-group">
											<label for="template-contactform-phone">Phone</label>
											<input type="text" id="template-contactform-phone" name="template-contactform-phone" value="" class="sm-form-control" />
										</div>

										<div class="w-100"></div>

										<div class="col-md-8 form-group">
											<label for="template-contactform-subject">Subject <small>*</small></label>
											<input type="text" id="template-contactform-subject" name="subject" value="" class="required sm-form-control" />
										</div>

										<div class="col-md-4 form-group">
											<label for="template-contactform-service">Services</label>
											<select id="template-contactform-service" name="template-contactform-service" class="sm-form-control">
												<option value="">-- Select One --</option>
												<option value="Wordpress">Wordpress</option>
												<option value="PHP / MySQL">PHP / MySQL</option>
												<option value="HTML5 / CSS3">HTML5 / CSS3</option>
												<option value="Graphic Design">Graphic Design</option>
											</select>
										</div>

										<div class="w-100"></div>

										<div class="col-12 form-group">
											<label for="template-contactform-message">Message <small>*</small></label>
											<textarea class="required sm-form-control" id="template-contactform-message" name="template-contactform-message" rows="6" cols="30"></textarea>
										</div>

										<div class="col-12 form-group d-none">
											<input type="text" id="template-contactform-botcheck" name="template-contactform-botcheck" value="" class="sm-form-control" />
										</div>

										<div class="col-12 form-group">
											<button name="submit" type="submit" id="submit-button" tabindex="5" value="Submit" class="button button-3d m-0">Submit Comment</button>
										</div>
									</div>

									<input type="hidden" name="prefix" value="template-contactform-"/>

								</form>
							</div>

						</div>
                        {/* <!-- Contact Form End --> */}

						{/*-- Google Map
						 ============================================= -- */}
						<div class="col-lg-6 min-vh-50">
							<div class="gmap h-100" data-latitude="-37.813629" data-longitude="144.963058" data-markers='[{latitude:-37.813629, longitude:144.963058, html: "<div class=\"p-2\" style=\"width: 300px;\"><h4 class=\"mb-2\">Hi! We are <span>Envato!</span></h4><p class=\"mb-0\" style=\"font-size:1rem;\">Our mission is to help people to <strong>earn</strong> and to <strong>learn</strong> online. We operate <strong>marketplaces</strong> where hundreds of thousands of people buy and sell digital goods every day.</p></div>", icon:{ image: "images/icons/map-icon-red.png", iconsize: [32, 39], iconanchor: [32,39] } }]'></div>
						</div>
                        {/* <!-- Google Map End --> */}
					</div>

					{/* -- Contact Info
					============================================= -- */}
					<div class="row col-mb-50">
						<div class="col-sm-6 col-lg-3">
							<div class="feature-box fbox-center fbox-bg fbox-plain">
								<div class="fbox-icon">
									<a href="#" id='contactIcon'><FontAwesomeIcon className="card-star-icon" icon={faMapMarkedAlt} /></a>
								</div>
								<div class="fbox-content">
									<h3>Our Headquarters<span class="subtitle">Dhaka, Bangladesh</span></h3>
								</div>
							</div>
						</div>

						<div class="col-sm-6 col-lg-3">
							<div class="feature-box fbox-center fbox-bg fbox-plain">
								<div class="fbox-icon">
									<a href="#" id='contactIcon'><FontAwesomeIcon className="card-star-icon" icon={faPhone} /></a>
								</div>
								<div class="fbox-content">
									<h3>Speak to Us<span class="subtitle">(+880) 1636-130825</span></h3>
								</div>
							</div>
						</div>

						<div class="col-sm-6 col-lg-3">
							<div class="feature-box fbox-center fbox-bg fbox-plain">
								<div class="fbox-icon">
									<a href="#" id='contactIcon'>
                                    <FontAwesomeIcon className="card-star-icon" icon={faSkype} />
                                        
                                    
                                    </a>
								</div>
								<div class="fbox-content">
									<h3>Make a Video Call<span class="subtitle">OnSkype</span></h3>
								</div>
							</div>
						</div>

						<div class="col-sm-6 col-lg-3">
							<div class="feature-box fbox-center fbox-bg fbox-plain">
								<div class="fbox-icon">
									<a href="#" id='contactIcon'><FontAwesomeIcon className="card-star-icon" icon={faTwitter} /></a>
								</div>
								<div class="fbox-content">
									<h3>Follow on Twitter<span class="subtitle">2.3M Followers</span></h3>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</section>
       
    );
};

export default Contact;