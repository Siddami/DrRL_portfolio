import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function About() {
  const [
    ref,
    inView,
  ] =
    useInView(
      {
        threshold: 0.5,
      }
    );
  return (
    <section
      className="section min-h-[85vh] lg:min-h-[78vh]"
      id="about"
      ref={
        ref
      }
    >
      <div className="container mx-auto">
        <div>
          {/* img */}
          <div className="flex-1 bg-contain bg-no-repeat mix-blend-lighten bg-top"></div>
          {/* text */}
          <div className="flex-1">
            <h2 className="h2 text-accent">
              About
              Me
            </h2>
            <h3 className="h3 mb-4">
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
            <p className="mb-6">
              With
              over
              a
              decade
              of
              expertise
              as
              a
              Doctor
              of
              Philosophy
              specializing
              in
              education
              and
              management,
              I
              have
              dedicated
              my
              career
              to
              academia.
              As
              a
              seasoned
              lecturer,
              associate
              professor,
              and
              committed
              researcher,
              my
              passion
              lies
              in
              advancing
              knowledge
              and
              fostering
              critical
              thinking
              within
              the
              realms
              of
              education
              and
              management.
            </p>
            {/* stats */}
            <div className="flex gap-x-6">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? (
                    <CountUp
                      start={
                        0
                      }
                      end={
                        20
                      }
                      duration={
                        3
                      }
                    />
                  ) : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years
                  of
                  <br />
                  Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? (
                    <CountUp
                      start={
                        0
                      }
                      end={
                        50
                      }
                      duration={
                        3
                      }
                    />
                  ) : null}

                  +
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Research
                  Studies
                  <br />
                  Published
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg">
                Contact
                Me
              </button>

              <a
                href="#"
                className="text-gradient btn-link"
              >
                {" "}
                My
                Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
