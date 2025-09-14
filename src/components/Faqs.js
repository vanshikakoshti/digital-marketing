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
                    What services does Archon provide?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">We offer a full suite of digital marketing solutions, including SEO, social media management, paid advertising (PPC), content creation, email marketing, and brand strategy.
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
                    How long will it take to see results?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                   While some campaigns like PPC can deliver immediate results, strategies like SEO and content marketing typically take 3–6 months to show significant improvements.
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
                   Do you work with businesses of all sizes?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                   Yes, we collaborate with startups, small businesses, and large enterprises across multiple industries to tailor strategies that meet their unique needs.
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
