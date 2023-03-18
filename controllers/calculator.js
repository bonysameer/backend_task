let number=100;
const getnumber = (req, res) => {
  res.status(200).json(number);
};
const updatenumber = (req, res) => {
  number += Number(req.body.value);
  res.status(200).json(Number(number));
};
const deletenumber = (req, res) => {
  number = 100;
  res.status(200).json(Number(number));
};
export{getnumber,updatenumber,deletenumber}

