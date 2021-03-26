import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import axiosMain from '../../http/axios/axios_main';
import { toast } from 'react-toastify';
import profileImage from '../../assets/images/profile/2.png';
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import { Row, Col, Container } from "reactstrap";
import img1 from '../../assets/images/profile/3.png';
import img2 from '../../assets/images/img8.png';
import CustomDropdown from "../../components/CustomDropdown/CustomDropdown";

function shoot() {
  alert("Your book has been added to cart");
}

const Home = () => {
  const userData = JSON.parse(localStorage.getItem('userData'));

  const [postData, setPostData] = useState([]);
  const [comment, setComment] = useState();
  const [selectOptions, setSelectionOptions] = useState([]);
  const [findId, setFindId] = useState([]);

  const [bookForPost, setBookForPost] = useState();
  const [newsPost, setnewsPost] = useState();

  const [errValue, setErrValue] = useState();
  const dispatch = useDispatch();

  const data = useSelector(state => state);

  useEffect(() => {
    getAllPost();
    getMyBookDropdown();
  }, []);

  const getMyBookDropdown = () => {
    const userId = localStorage.getItem('userId');
    axiosMain
      .get('/ownbookusr/' + "?pk=" + userId)
      .then(response => {
        if (response.status === 200) {
          let dataArr = [];
          let idArr = [];
          // data.length >= 1 && data.map(({ bookJSON }, index) => (

          // ));
          (response.data).map(({ bookJSON }, index) => {

            dataArr.push({
              label: bookJSON.name,
              value: bookJSON.name,
            });
            idArr.push({
              id: bookJSON.id,
              name: bookJSON.name,
            });
          });
          setSelectionOptions(dataArr);
          setFindId(idArr);
        }
      })
      .catch((error) => {
        console.error("Error", error);
        setErrValue("The Crypto Data Feetch Unsuccessful");
      });
  };

  const getAllPost = () => {
    const userId = localStorage.getItem('userId');
    axiosMain
      .get('/txtpostbyuser/' + '?pk=' + userId)
      .then(response => {
        if (response.status === 200) {
          setPostData(response.data);
          toast.success(`User Profile Fetch Successful`, {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      })
      .catch(error => {
        setErrValue(error);
        console.error('Error', error);
        setErrValue("This User Profile Fetch Failed")
      });
  };

  const submitCommentHandler = (e) => {
    e.preventDefault();

    const userId = localStorage.getItem('userId');
    axiosMain
      .post('/postcomment/', {
        user: userId,
        post: comment.postId,
        comments: comment.comment
      })
      .then(response => {
        if (response.status === 200) {
          window.location.reload(false);
          toast.success(`User Profile Fetch Successful`, {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      })
      .catch(error => {
        setErrValue(error);
        console.error('Error', error);
        setErrValue("This User Profile Fetch Failed")
      });
  }

  const postSubmitHandler = () => {

    const userId = localStorage.getItem('userId');
    console.log("book:", newsPost)
    console.log("Id", findId);
    findId.map(({ name, id }, index) => {
      if (name == bookForPost) {
        axiosMain
          .post('/txtpost/', {
            user: userId,
            post: newsPost,
            types: "book",
            related: id
          })
          .then(response => {
            if (response.status === 200) {
              console.log("Response:", response.data);
              // window.location.reload(false);

            }
          })
          .catch(error => {
            setErrValue(error);
            console.error('Error', error);
            setErrValue("This User Profile Fetch Failed")
          });
      }
    })
  }

  return (
    <React.Fragment>
      <Header />
      <Sidebar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="content-body">

        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-12">
              <div className="card">
                <div className="card-body">
                  <div className="invite-content">
                    <h4>Invite a friend and get $30</h4>
                    <p>You will receive up to $30 when they sign up with your invite link <br />
                    </p>
                    <div className="copy-link">
                      <form action="#">
                        <div className="input-group">
                          <input type="text" className="form-control"
                            value="https://www.bookstagram.io/join/12345" />
                          <span className="input-group-text">Copy</span>
                        </div>
                      </form>
                    </div>

                    {/* <!-- <div className="social-share-link">
                      <a href="#"><span><i className="icofont-facebook"></i></span></a>
                      <a href="#"><span><i className="icofont-twitter"></i></span></a>
                      <a href="#"><span><i className="icofont-whatsapp"></i></span></a>
                      <a href="#"><span><i className="icofont-telegram"></i></span></a>
                    </div> --> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-12">
              <div className="card">
                <div className="card-body">
                  <div className="invite-content">
                    <h4>Get commisions every day</h4>
                    <p>You can receive money when your friends buys book from you</p>
                    <Link
                      to="/add-friends"
                      className="btn btn-primary"
                    >
                      Add Friends
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-6 col-lg-6">
              <div className="card welcome-profile">
                <div className="card-body">
                  <img src="./images/profile/2.png" alt="" />
                  <h4>Welcome, Dishant Shah!</h4>
                  <p>Looks like you are not verified yet. Verify yourself to use the full potential of
                                    Bookstagram.</p>

                  <ul>
                    <li>
                      <a href="#">
                        <span className="verified"><i className="icofont-check-alt"></i></span>
                        Verify account
                                        </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <Container>
              <div className="container">
                <h2>Post your reviews on Bookstagram</h2>
              </div>

              <div className="container">
                <CustomDropdown
                  className="form-select"
                  name="report-type"
                  id="report-select"
                  options={selectOptions}
                  onChangeOption={(selected) => setBookForPost(selected)}
                />
                <input
                  type="text"
                  placeholder="Review"
                  name="Review"
                  required
                  onChange={(e) => setnewsPost(e.target.value)}
                />
              </div>

              <div className="container">
                <input
                  type="submit"
                  onClick={() => postSubmitHandler()} />
              </div>
              {postData.length >= 1 && postData.map(({ id, authJSON, user, post, likes, comments, share, header, types, dp, publist, CommentsJSON }, index) => (
                <Row>
                  <div className="col-12">
                    <article className="blog-card">
                      <div className="blog-card_outline">
                        <span className="post-username"> <img src={img1} alt=" Profile image" style={{ width: "20px" }, { height: "40px" }} />  {authJSON.first_name} {authJSON.last_name} shared a post</span>
                        <div className="blog-card__info">
                          <img src={dp} alt="Unfinished" width="200" height="300" />

                          <h5>{types}</h5>
                          <p>
                            <a href="#" className="icon-link mr-3"><i className="icofont-link"></i> {header}</a>
                          </p>
                          <p className="new-post">{post}
                          </p>
                          <span>
                            <i onclick="myFunction(this)" className="icofont-thumbs-up"> {likes}</i>
                            <i className="icofont-thumbs-down"> 3</i>
                            <i className="icofont-comment"> {comments}</i>
                            <i className="icofont-share-boxed"></i>
                            <div className="row">
                              <div className="col-sm-7">
                                <div className="review-block-newsfeed">
                                  {CommentsJSON && CommentsJSON.length >= 1 && CommentsJSON.map(({ userJSON, comments, publist }, index) => (
                                    < div className="row" >
                                      <div className="col-sm-3">
                                        <img src="http://dummyimage.com/60x60/666/ffffff&text=No+Image" className="img-rounded" />
                                        <div className="review-block-name"><a href="#">{userJSON.first_name} {userJSON.last_name}</a></div>
                                        <div className="review-block-date">{publist}</div>
                                      </div>
                                      <div className="col-sm-9">
                                        <div className="review-block-title">{comments}</div>
                                        <div className="review-block-description">{comments}</div>
                                      </div>
                                    </div>
                                  ))}

                                </div>

                                <hr />
                              </div>
                            </div>
                            <form className="comment-form" method="post" action=" ">
                              Comments: <br />
                              <input
                                type='text'
                                placeholder='add your comment'
                                name='comment'
                                onChange={(e) => setComment({ "comment": e.target.value, "postId": id })}
                              />
                              <br />
                              <button
                                type='submit'
                                className='btn btn-primary'
                                onClick={(e) => submitCommentHandler(e)}
                              >
                                Submit
                             </button>
                              <button className="addtowishlist" onClick={shoot}><span>Buy Now</span></button>
                              {/* <a href="#" className="addtowishlist"><span>Buy Now</span></a> */}
                            </form>

                          </span>

                        </div>

                      </div>

                    </article>
                  </div>
                </Row>
              ))}
            </Container>
          </div>
        </div>
      </div>
    </React.Fragment >
  );
};

export default Home;
