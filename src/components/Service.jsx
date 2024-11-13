import React from "react";
import data_recovery from "../assets/service/data-recovery-service.webp";
import Hardware_Upgrade from "../assets/service/Hardware-Upgrades.jpeg";
import repair_service1 from "../assets/service/repair-service1.avif";
import screen_replacement from "../assets/service/screen-replacement.jpg";
import software_installation_service from "../assets/service/software-installation-service.webp";
import Malware_Removal_service from "../assets/service/Malware-Removal-service.webp";

const Service = () => {
  return (
    <>
      <div className="service">
        <div className="container">
          <section className="service-intro">
            <h1>Our Services</h1>
            <p>
              We provide high-quality services for your computer and laptop
              needs, from repairs to upgrades and maintenance.
            </p>
          </section>

          <section className="services">
            <div className="service-item">
              <div className="service-item-img">
                <img src={repair_service1} alt="repair service image" />
              </div>
              <div className="service-item-text">
                <h3>Computer Repair</h3>
                <p>
                  Get quick and reliable computer repair services to keep your
                  device running smoothly.
                </p>
              </div>
            </div>
            <div className="service-item">
              <div className="service-item-img">
                <img src={screen_replacement} alt="screen replacement image" />
              </div>
              <div className="service-item-text">
                <h3>Laptop Screen Replacement</h3>
                <p>
                  Fix broken or damaged laptop screens with our fast replacement
                  services.
                </p>
              </div>
            </div>
            <div className="service-item">
              <div className="service-item-img">
                <img
                  src={Malware_Removal_service}
                  alt="Malware Removal image"
                />
              </div>
              <div className="service-item-text">
                <h3>Virus and Malware Removal</h3>
                <p>
                  Protect your data with professional virus and malware removal
                  services.
                </p>
              </div>
            </div>
            <div className="service-item">
              <div className="service-item-img">
                <img src={data_recovery} alt="data-recovery image" />
              </div>
              <div className="service-item-text">
                <h3>Data Recovery</h3>
                <p>
                  Recover lost files and important data with our expert data
                  recovery solutions.
                </p>
              </div>
            </div>
            <div className="service-item">
              <div className="service-item-img">
                <img src={Hardware_Upgrade} alt="Hardware Upgrades image" />
              </div>
              <div className="service-item-text">
                <h3>Hardware Upgrades</h3>
                <p>
                  Upgrade your hardware for better performance, speed, and
                  efficiency.
                </p>
              </div>
            </div>
            <div className="service-item">
              <div className="service-item-img">
                <img
                  src={software_installation_service}
                  alt="software installation image"
                />
              </div>
              <div className="service-item-text">
                <h3>Software Installation</h3>
                <p>
                  We handle software installation and setup for all your
                  essential applications.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Service;
