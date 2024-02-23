import { Link } from "react-router-dom";

const AdditionalResources = () => {
  return (
    <div style={{ textAlign: "justify" }}>
      <p style={{ textAlign: "center" }}>
        <strong>
          <u>Additional Reading Resources</u>
        </strong>
      </p>
      <h6>
        <strong>Introduction to Machine Learning and Bioinformatics</strong>
      </h6>
      <p className="arreference">
        <strong>Reference:</strong> Burr, Tom. Technometrics; Alexandria Vol.
        51, Iss. 4, (Nov 2009): 482-483.
      </p>
      <p>
        <strong>Retrieved from:</strong>
      </p>
      <p>
        <Link
          to="https://www.proquest.com/docview/213673419/C17BCCA700BB4D29PQ/4?accountid=173659"
          target="__blank"
        >
          https://www.proquest.com/docview/213673419/C17BCCA700BB4D29PQ/4?accountid=173659
        </Link>
      </p>
      <p>
        <strong>
          To access the complete document please go to the e-library and copy
          paste the below DOI number on search bar
        </strong>
      </p>
      <p>
        <strong>213673419</strong>
      </p>
      <br />
      <p>
        <strong>Abstract</strong>
      </p>
      <p>
        pages 89 through 97 describe modern Bayesian analysis, in which
        probability distributions describe both data and parameters, and Markov
        chain Monte Carlo is presented as the key computational tool for
        studying such probability distributions. A few examples of
        classification (pattern recognition) tasks in bioinformatics are listed,
        such as classifying samples to different disease states on the basis of
        gene or protein expression data, and prediction of secondary protein
        structure. Chapter 7 is true to its title, covering pairwise and
        multiple sequence alignment, identification of transcription factor
        binding sites, and gene expression data
      </p>
      <br />
      <h6>
        <strong>
          Multilevel Cognitive Machine-Learning-Based Concept for Artificial
          Awareness: Application to Humanoid Robot Awareness Using Visual
          Saliency
        </strong>
      </h6>
      <p className="arreference">
        <strong>Reference:</strong> Madani, Kurosh; Ramik, Dominik M; Sabourin,
        Cristophe. Applied Computational Intelligence and Soft Computing; New
        York Vol. 2012, (2012). DOI:10.1155/2012/354785
      </p>
      <p>
        <strong>Retrieved from:</strong>
      </p>
      <Link
        to="https://www.proquest.com/docview/1038346116/8CAFF9B0E9484D44PQ/19?accountid=173659"
        target="__blank"
      >
        <p>
          https://www.proquest.com/docview/1038346116/8CAFF9B0E9484D44PQ/19?accountid=173659
        </p>
      </Link>
      <p>
        <strong>
          To access the complete document please go to the e-library and copy
          paste the below DOI number on search bar
        </strong>
      </p>
      <p>
        <strong>1038346116</strong>
      </p>
      <br />
      <p>
        <strong>Abstract</strong>
      </p>
      <p>
        As part of intelligence, the awareness is the state or ability to
        perceive, feel, or be mindful of events, objects, or sensory patterns:
        in other words, to be conscious of the surrounding environment and its
        interactions. Inspired by early-ages human skills developments and
        especially by early-ages awareness maturation, the present paper accosts
        the robots intelligence from a different slant directing the attention
        to combining both cognitive and perceptual abilities. Within such a
        slant, the machine (robot) shrewdness is constructed on the basis of a
        multilevel cognitive concept attempting to handle complex artificial
        behaviors. The intended complex behavior is the autonomous discovering
        of objects by robot exploring an unknown environment: in other words,
        proffering the robot autonomy and awareness in and about unknown
        backdrop.
      </p>
    </div>
  );
};

export default AdditionalResources;
