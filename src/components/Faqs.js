import React from "react";

export default function Faqs() {
  return (
    <div>
      <div className="container ">
        <div className="row">
          <div className="col-md-12 text-center">
            <p className="text-yellow text-uppercase">Faqs</p>
            <h2 className="">
              Frequently Asked
              <br /> Questions
            </h2>
          </div>
          </div>
          <div className="row default-padding justify-content-center">
          <div className="col-md-8">
            <div class="accordion" id="accordionExample">
              <div class="accordion-item" data-aos="fade-up" data-aos-delay="100">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                   What is digital marketing and why is it important?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">Digital marketing uses online channels—like search engines, social media, email, and websites—to promote brands and connect with customers. It’s essential for visibility, lead generation, and staying competitive in today’s digital-first world.
                  </div>
                </div>
              </div>
              <div class="accordion-item" data-aos="fade-up" data-aos-delay="200">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    How long does it take to see results from digital marketing?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                  It depends on the strategy. SEO can take 3–6 months, while PPC and social ads can show results within days. Consistency and data analysis are key to long-term success.
                  </div>
                </div>
              </div>
              <div class="accordion-item" data-aos="fade-up" data-aos-delay="300">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                   What services do you offer as part of digital marketing?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                   We offer SEO, social media management, paid ads (PPC), content creation, email marketing, and brand strategy—all tailored to your business goals.
                  </div>
                </div>
              </div>
            </div>
          </div>
            
          </div>
        
      </div>
    </div>
  );
}
