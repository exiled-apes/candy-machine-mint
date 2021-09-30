import './roadmap.scss';

export interface RoadMapElementProps {
  textLeft: string;
  textRight: string
}

const RoadMapElement = (props: RoadMapElementProps) => {
  return (
      <div className="row text-wrapper">
        <span data-aos="fade-right" data-aos-duration="2000"
              className="col-sm-2 number-text aos-init aos-animate">
          {props.textLeft}
        </span>
        <span
            data-aos="fade-left"
            data-aos-duration="2000"
            className="col-sm-10 subtitle aos-init aos-animate">
        {props.textRight}
        </span>
      </div>
  );
}

export default RoadMapElement;