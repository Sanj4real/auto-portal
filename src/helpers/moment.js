import moment from "moment";

const Moment = (date) => {
  return moment(date).format("DD MM YYYY");
};

export default Moment;
