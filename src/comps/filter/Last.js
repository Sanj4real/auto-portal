import { Row, Col, Form, Select, Radio } from "antd";
import { Upload, Modal, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { AiFillFolderOpen, AiFillBulb } from "react-icons/ai";
import { useState } from "react";

// video
const props = {
  action: "//jsonplaceholder.typicode.com/posts/",
  listType: "picture",

  previewFile(file) {
    console.log("Your upload file:", file); // Your process logic. Here we just mock to the same file

    return fetch("https://next.json-generator.com/api/json/get/4ytyBoLK8", {
      method: "POST",
      body: file,
    })
      .then((res) => res.json())
      .then(({ thumbnail }) => thumbnail);
  },
};

const THINGSTOKNOW = [
  {
    title: " Kindly upload a video under 1 minute and 200 MBs",
  },
  {
    title:
      " The video should cover 360 degree view of the vehicle and interior (optional)",
  },
  {
    title: "  You can also include the engine sound in the video",
  },
];

export default function LastSteps() {
  const [form] = Form.useForm();
  const { Option } = Select;

  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => resolve(reader.result);

      reader.onerror = (error) => reject(error);
    });

  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");

  const [fileList, setFileList] = useState([]);

  const handleCancel = () => setPreviewVisible(false);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

  return (
    <div className="">
      <Form form={form} layout="vertical" autoComplete="off">
        <Row gutter={[24]}>
          <Col xs={24} sm={12} md={18}>
            <div className="items-center text-[15px] mt-6">
              <h4 className="text-lg mb-4 capitalize font-medium">
                Upload Photos
                <i className="ml-3 text-sm">(Minimum 3 photos required)</i>
              </h4>
              <div>
                <Upload
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  listType="picture-card"
                  fileList={fileList}
                  onPreview={handlePreview}
                  onChange={handleChange}
                >
                  {fileList.length >= 1 ? null : uploadButton}
                </Upload>
                <Modal
                  visible={previewVisible}
                  title={previewTitle}
                  footer={null}
                  onCancel={handleCancel}
                >
                  <img
                    alt="example"
                    style={{
                      width: "100%",
                    }}
                    src={previewImage}
                  />
                </Modal>
              </div>
            </div>
          </Col>

          <Col xs={24} sm={12} md={12}>
            <div className="items-center text-[15px] mt-6">
              <h4 className="text-lg mb-4 capitalize font-medium">Upload a Video</h4>
              <div>
                <Upload {...props}>
                  <Button icon={<AiFillFolderOpen />}></Button>
                </Upload>
              </div>
            </div>
          </Col>

          <Col xs={24} sm={24} md={12}>
            <div className="items-center text-[15px] mt-6 bg-[#f1f3f5] p-6">
              <h4 className="text-lg flex mb-3 items-center font-medium capitalize">
                <AiFillBulb className="text-[#ffd517]  mr-3" />
                Get High Visibility from a Video
              </h4>
              <div className="">
                <ul>
                  {THINGSTOKNOW.map((item, index) => (
                    <li key={index} item={item} className="list-disc ml-6 mb-1">
                      {item.title}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
