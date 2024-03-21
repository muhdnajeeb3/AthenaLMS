import { Editor } from "@tinymce/tinymce-react";
import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { plugins } from "../constants/plugins";
import { toolbars } from "../constants/toolbars";

const AssignmentEditor = () => {
  const [value, setValue] = useState("");
  const [supportfiles, setSupportfiles] = useState(false);
  const [text, setText] = useState("");

  const supportfilesHandler = () => {
    setSupportfiles(!supportfiles);
  };
  const onEditorInputChange = (newValue, editor) => {
    setValue(newValue);
    setText(editor.getContent({ format: "text" }));
  };
  return (
    <Container fluid className="bg-white">
      <div className="ae-row py-5">
        <div className="col-md-8 ae-content">
          <div>
            <h4>
              <b>Unit 1 -Assignment -Data Visualization</b>
            </h4>
          </div>
          <div className="rowx">
            <span className="w-100  text-justify">
              <p>
                <span>
                  <strong>Question- Total Marks - 30&nbsp;</strong>
                </span>
              </p>
              <p>
                <span className="flex gap-10">
                  <b>1)</b>{" "}
                  <span>
                    What is your view about data modelling? Explain the steps
                    involved in a data analysis process.{" "}
                    <strong>(5 Marks,Min 200 words)</strong>
                  </span>
                </span>
              </p>
              <p>
                <span className="flex gap-10">
                  <b>2)</b>{" "}
                  <span>
                    Briefly explain why data cleansing is important for data
                    visualization? Explain what should be done with missing
                    data? <strong>(5 Marks, Min 200 words)</strong>
                  </span>
                </span>
              </p>
              <p>
                <span className="flex gap-10">
                  <b>3)</b>{" "}
                  <span>
                    Mention and explain about the key characteristics of an
                    effective data visualization?{" "}
                    <strong>(5 Marks, Min 200 words)</strong>
                  </span>
                </span>
              </p>
              <p>
                <span className="flex gap-10">
                  <b>4)</b>{" "}
                  <span>
                    Define A/B testing and multivariate testing. Analyze the
                    procedure to conduct multivariate test.{" "}
                    <strong>(5 Marks, Min 200 words)</strong>
                  </span>
                </span>
              </p>
              <p>
                <span className="flex gap-10">
                  <b>5)</b>{" "}
                  <span>
                    Define network visualization and network visual analytics.
                    Mention and explain in detail the different types of methods
                    used in network analysis.{" "}
                    <strong>(5 Marks, Min 200 words)</strong>
                  </span>
                </span>
              </p>
            </span>
          </div>
          <div>
            <h5>
              <b>Student Response</b>
            </h5>
          </div>
          <div>
            <span>Assignment Response</span>
          </div>
          <div className="py-4">
            <Editor
              apiKey="vxlnf4hgzxborg4poyt2sqrxak5984rmbp9rt8xr1elsbl3n"
              onEditorChange={(newValue, editor) =>
                onEditorInputChange(newValue, editor)
              }
              onInit={(evt, editor) =>
                setText(editor.getContent({ format: "text" }))
              }
              value={value}
              // initialValue={'Write your thoughts here...'}
              init={{
                plugins: plugins,
                toolbar: toolbars,
              }}
            />
          </div>
          <div className="flex item-center formcheck pb-2">
            <Form.Check // prettier-ignore
              type="checkbox"
              id=""
              label="Have Supporting Files"
              style={{ marginLeft: "auto" }}
              onClick={supportfilesHandler}
            />
          </div>
          {supportfiles && (
            <div className="row">
              <label className="text-right">Upload Supporting Files </label>
              <input
                type="file"
                multiple="multiple"
                className="form-controlx"
              />
              <span
                style={{ fontSize: "13px", color: "#CC0000" }}
                className="py-2"
              >
                <em>
                  Note: Kindly upload a single document with all
                  tasks/responses. Maximum document size of 10MB is allowed to
                  be uploaded.
                </em>
              </span>
            </div>
          )}
          <div className="flex py-2">
            <Button
              className="default-btn"
              style={{ marginLeft: "auto", width: "100px" }}
            >
              Clear
            </Button>
          </div>
        </div>
        <div className="col-md-4 bg-gray py-4 px-3 ae-comments">
          <div>
            <h5>
              <b>Comments</b>
            </h5>
          </div>
          <div>
            <span className="no-comments">No Comments</span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AssignmentEditor;
