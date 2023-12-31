/* eslint-disable react/prop-types */
import { StarOutlined, StarFilled } from "@ant-design/icons";
import { Button } from "antd";

const StarButton = ({ isFavorite, onClick }) => {
  const Icon = isFavorite ? StarFilled : StarOutlined;
  return <Button icon={<Icon />} onClick={onClick} />;
};

export default StarButton;
