import { dataPost } from "../../Data/dataPost";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";

const Newfeed = () => {
  const fileSeclect = useRef();
  const [post, setPost] = useState(dataPost);

  const [upPost, setUppost] = useState({
    caption: "",
    img: "",
  });
  const [path, setPath] = useState("");

  const handleChange = (e) => {
    console.log(e.target.files[0]);
    setPath(URL.createObjectURL(e.target.files[0]));
    setUppost({ ...upPost, img: e.target.files[0].name });

    let element = document.getElementsByClassName("post-image");
    element[0].style.display = "block";
    console.log("hehe");
  };

  const submitForm = async (e) => {
    e.preventDefault();
    console.log(upPost);
    console.log(path);
    setUppost({ ...upPost, img: `${path}` });
    toast.success("Post successfully!");
    setPost([
      ...post,
      { caption: upPost.caption, img: path, date: new Date().toLocaleString() },
    ]);
    setUppost({ ...upPost, caption: "", img: [] });

    let element = document.getElementsByClassName("post-image");
    element[0].style.display = "none";
  };
  return (
    <SNewfeed>
      <div className="newfeed">
        <div className="head">
          <p>Newsfeed</p>
        </div>
        <div className="suffer">
          <div className="writeStatus">
            <div className="write">
              <div>
                <img
                  src="https://avatars.preply.com/i/logos/i/logos/avatar_wslh02bek4c.jpg"
                  alt=""
                />
              </div>
              <div>
                <textarea
                  placeholder="Enter content that you want to discuss with class"
                  value={upPost.caption}
                  onChange={(e) => {
                    setUppost({ ...upPost, caption: e.target.value });
                    console.log(e.target.value);
                  }}
                ></textarea>
                <div
                  style={{
                    minWidth: "100%",
                    minHeight: "100%",
                    marginTop: "4rem",
                  }}
                >
                  <img
                    className="post-image"
                    style={{
                      width: "50%",
                      height: "50%",
                      zIndex: "1",
                      borderRadius: "0rem",
                      marginLeft: "30%",
                      display: "none",
                    }}
                    src={path}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="statusbtn">
              <input
                onChange={handleChange}
                onClick={(e) => (e.target.value = null)}
                name="file"
                type="file"
                ref={fileSeclect}
                hidden
              />
              <input
                type="button"
                value="Select file"
                onClick={() => fileSeclect.current.click()}
              />
              <input onClick={submitForm} type="submit" value="Post" />
            </div>
          </div>
          <>
            {post === undefined ||
              post.map((item, index) => {
                return (
                  <div className="post" key={index}>
                    <div className="inforPost">
                      <img
                        src="https://avatars.preply.com/i/logos/i/logos/avatar_wslh02bek4c.jpg"
                        alt=""
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "50%",
                        }}
                      />
                      <div className="nameAnddate">
                        <h6>Nguyen Minh Duc</h6>
                        <p>{item.date}</p>
                      </div>
                      <box-icon name="dots-vertical-rounded"></box-icon>
                    </div>

                    <div className="contentPost">
                      <p>{item.caption}</p>
                      {!item.img ? (
                        <></>
                      ) : (
                        <img
                          src={item.img}
                          alt=" "
                          style={{ width: "100%", height: "500px" }}
                        />
                      )}
                    </div>

                    <div className="numberComment">
                      <box-icon name="comment-detail" size="sm"></box-icon>
                      <p>{item.numberCmt} comment</p>
                    </div>

                    <div className="comment">
                      <img
                        src="https://avatars.preply.com/i/logos/i/logos/avatar_wslh02bek4c.jpg"
                        alt=""
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "50%",
                        }}
                      />
                      <input placeholder="Comment..." />
                    </div>

                    <div className="showComment">
                      <img
                        src="https://thegioigiaitri.com.vn/wp-content/uploads/2022/08/MONO-3-1.jpg"
                        alt=""
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "50%",
                        }}
                      />
                      <div className="contentComment">
                        <h6>MONO</h6>
                        <p>{item.contentCmt}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </>
        </div>
      </div>
      <div className="notify">
        <div className="head">
          <p>Notification from teacher</p>
        </div>
        <div className="contentNotice">
          <h6>School leave notice</h6>
          <p>The whole class is absent in the afernoon</p>
        </div>
        <div className="contentNotice">
          <h6>School leave notice</h6>
          <p>The whole class is absent in the afernoon</p>
        </div>
        <div className="contentNotice">
          <h6>School leave notice</h6>
          <p>The whole class is absent in the afernoon</p>
        </div>
        <div className="contentNotice">
          <h6>School leave notice</h6>
          <p>The whole class is absent in the afernoon</p>
        </div>
        <div className="contentNotice">
          <h6>School leave notice</h6>
          <p>The whole class is absent in the afernoon</p>
        </div>
        <ToastContainer style={{ fontSize: "20px" }} />
      </div>
    </SNewfeed>
  );
};

export default Newfeed;

const SNewfeed = styled.div`
  ToastContainer {
    position: absolute;
    left: 100%;
  }
  display: flex;
  justify-content: space-around;
  .newfeed {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin-left: -35%;
    .head {
      margin-left: -27%;
      width: 170%;
      background-color: white;
      height: 70px;
      border: 2px solid gainsboro;
      align-items: center;
      p {
        font-size: 20px;
        line-height: 70px;
        margin-left: -20px;
        font-weight: bolder;
        text-align: center;
      }
    }
    .suffer {
      margin-left: 6%;
      width: 95%;
      min-height: 1000px;
      .writeStatus {
        display: flex;
        flex-direction: column;
        .write {
          box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
          border-radius: 10px 10px 0 0;
          background-color: white;
          display: flex;
          align-items: center;
          padding: 0 0 0 2rem;
          border: 1px solid gainsboro;
          img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
          }
          textarea {
            margin-top: 80px;
            padding-left: 20px;
            width: 600px;
            height: 50px;
            font-size: 20px;
            line-height: 40px;
            border: 1px solid white;
            resize: none;
          }
          textarea:focus {
            border: none;
          }
        }

        .statusbtn {
          box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
          background-color: white;
          display: flex;
          gap: 2rem;
          height: 50px;
          padding: 0 2rem 0 30rem;
          border-radius: 0 0 10px 10px;
          border: 1px solid gainsboro;
          input {
            font-size: 20px;
            border: 1px solid white;
            font-weight: bolder;
            background-color: white;
          }
        }
      }
      .post {
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        margin-top: 1rem;
        display: flex;
        flex-direction: column;
        background-color: white;
        border-radius: 10px;
        border: 1px solid gainsboro;
        min-height: 100px;
        .inforPost {
          padding: 0 0 0 2rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          .nameAnddate {
            display: flex;
            flex-direction: column;
            margin-top: 20px;
            p {
              font-size: 13px;
            }
          }
          box-icon {
            margin-left: 65%;
          }
        }
        .contentPost {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          p {
            font-size: 20px;
            margin-left: 2rem;
          }
        }
        .numberComment {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin: 0 0 0 75%;
          p {
            margin-top: 10px;
            font-size: 20px;
          }
        }
        .comment {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin: 0 0 0 2rem;
          input {
            padding-left: 1rem;
            font-size: 20px;
            height: 50px;
            width: 86%;
            background-color: gainsboro;
            border: 0;
            border-radius: 30px;
          }
        }
        .showComment {
          margin: 1rem 0 0 2rem;
          display: flex;
          gap: 1rem;
          padding-bottom: 20px;
          .contentComment {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 0 1rem;
            display: inline-block;
            border-radius: 10px;
            background-color: gainsboro;
            h6 {
              margin-top: 2px;
            }
            p {
              margin-top: -9px;
              font-size: 17px;
            }
            height: 50px;
            border: 0;
          }
        }
      }
    }
  }

  .notify {
    position: fixed;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-right: -58.5%;
    width: 24%;
    height: 10000px;
    background-color: white;
    border: 1px solid gainsboro;
    .head {
      border: 1px solid gainsboro;
      background-color: white;
      display: flex;
      justify-content: center;
      height: 70px;
      p {
        font-size: 20px;
        font-weight: bolder;
        line-height: 70px;
      }
    }
    .contentNotice {
      margin-left: 3px;
      display: flex;
      flex-direction: column;
      height: 50px;
      border: 1px solid black;
      border-left: 10px solid #6284ff;
      p {
        font-size: 15px;
      }
    }
  }
`;
