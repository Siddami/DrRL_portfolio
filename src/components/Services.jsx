//icons
import { BsArrowUpRight } from "react-icons/bs";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";

//services data
const services =
  [
    {
      name: "Research",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate cupiditate at quidem obcaecati dignissimos cum harum blanditiis deserunt nihil rem, velit, suscipit similique perspiciatis illo dolorum aperiam molestiae, tempora repellendus?",
      link: "Learn-more",
    },
    {
      name: "Human Resource Management",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate cupiditate at quidem obcaecati dignissimos cum harum blanditiis deserunt nihil rem, velit, suscipit similique perspiciatis illo dolorum aperiam molestiae, tempora repellendus?",
      link: "Learn-more",
    },
    {
      name: "Lecturing",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate cupiditate at quidem obcaecati dignissimos cum harum blanditiis deserunt nihil rem, velit, suscipit similique perspiciatis illo dolorum aperiam molestiae, tempora repellendus?",
      link: "Learn-more",
    },
  ];

function Services() {
  return (
    <section
      className="section"
      id="services"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text & image */}
          <div className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten lg:bg-contain mb-12 lg:mb-0">
            <h2 className="h2 text-accent mb-6">
              What
              I
              Do:
            </h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I
              am
              a
              Doctor
              of
              Philosophy
              and
              a
              Lecturer
              with
              over
              20
              years
              of
              experience
            </h3>
            <button className="btn btn-sm">
              See
              my
              work
            </button>
          </div>

          {/* services  */}
          <div className="flex-1">
            {/* services list */}
            <div>
              {services.map(
                (
                  service,
                  index
                ) => {
                  //destructure service
                  const {
                    name,
                    description,
                    link,
                  } =
                    service;
                  return (
                    <div
                      key={
                        index
                      }
                    >
                      <div>
                        <h4>
                          Service
                          name
                        </h4>
                      </div>
                      <div>
                        links
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
