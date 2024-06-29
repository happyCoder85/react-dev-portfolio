import React from 'react';
import causes from '../data/CausesData';

const Causes = () => {

  const disableLink = (url) => {
    if (url === 'https://support.cancercarefdn.mb.ca/site/TR?fr_id=1943&pg=entry') {
        return true;
    } else {
        return false;
    }
  }

  const handleLinkNavigation = (url) => {
    window.open(url, '_blank');
  };



  return (
    <>
      <div data-aos="fade-up-left" className="main-container about">
        <div className="box-container">
            <div className="causes-description">
                <h1>Causes close to my heart</h1>
                <p>
                    In June 2023, my son was diagnosed with Acute Lymphoblastic Leukemia, a moment that filled me with helplessness despite the guidance of incredible doctors. This experience inspired me to support others facing similar challenges. Understanding the hardships many Canadian parents endure, I committed to raising funds through the Great Cycle Challenge for childhood cancer research. As a two-year participant, I am determined to improve outcomes and support families 
                affected by childhood cancer.
                </p>
                <p>
                    Childhood cancer ranks as the second leading cause of disease-related death among Canadian children, with around 1,000 new diagnoses annually. While advancements have raised the five-year survival rate to over 80%, ongoing research remains critical to finding cures for all forms of childhood cancer. Join me in making a difference by joining my fundraising efforts or making a donation. Together, we can offer hope and support to children battling cancer, striving for a future where every child has the opportunity to overcome this challenging disease.
                </p>
            </div>
            <div className="causes-cards-container">
            {causes.map((cause, index) => (
                <div
                key={index}
                className="cause-card"
                >
                <h3>{cause.title}</h3>
                <img src={cause.image} alt={cause.title + ' image'} />
                <div className="text">
                {cause.description.map((paragraph, index) => (
                    <p key={index} className="causes-description">{paragraph}</p>
                ))}
                <p className="cta">{cause.cta}</p>
                </div>
                { disableLink(cause.link) ? <button className="cta-button coming-soon" disabled>Coming Soon!</button> : <button className="cta-button" onClick={() => handleLinkNavigation(cause.link)}>Donate Now!</button> }
                </div>
            ))}
            </div>
        </div>
      </div>
    </>
  );
};

export default Causes;