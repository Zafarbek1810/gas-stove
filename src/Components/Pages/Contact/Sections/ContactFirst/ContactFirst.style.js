import styled from "styled-components";

const ContactFirstWrapper = styled.div`
  padding-top: 50px;

  .wrapper {
    background: rgba(6, 158, 120, 0.67);
    padding: 30px 0;
    border-radius: 20px;

    .top {
      width: 70%;
      margin: 0 auto 50px;

      h3 {
        font-size: 36px;
        text-align: center;
        font-weight: 700;
        margin-bottom: 0;
      }

      p.subtitle {
        text-align: center;
        font-size: 18px;
      }

      .cards {
        width: 70%;
        margin: auto;
        display: flex;
        justify-content: space-between;

        .card {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 10px 15px;
          border-radius: 10px;
          transition: 500ms;

          svg {
            height: 30px;
            width: 30px;
            fill: #FF5F2E;
            margin-bottom: 15px;
          }

          &:hover {
            background: #fff;
            border-radius: 10px;
            cursor: pointer;
          }
        }
      }
    }


    .bottom {
      width: 70%;
      margin: auto;
      background: #fff;
      border-radius: 15px;
      padding: 30px;

      form {
        display: flex;
        flex-direction: column;
        align-items: center;
        .wrap {
          display: flex;
          gap: 20px;
          width: 100%;
          margin-bottom: 20px;
        }

        .left {
          width: 50%;

          label {
            .label-name {
              margin-bottom: 5px;
              font-size: 18px;
            }

            .input-wrapper{
              position: relative;
              input {
                outline: none;
                border-radius: 5px;
                margin-bottom: 15px;
                padding: 13px 16px 13px 40px;
                width: 100%;
                border: 2px solid rgba(139, 139, 139, 0.3);

                &:focus {
                  border: 2px solid #FF5F2E;
                }

                &::placeholder {
                  color: rgba(161, 161, 161, 0.7);
                }
              }
              
              svg{
                height: 24px;
                width: 24px;
                position: absolute;
                top: 15px;
                left: 10px;
              }

            }
          }
        }

        .right {
          width: 50%;

          .label-name {
            font-size: 18px;
            margin-bottom: 5px;
          }

          textarea {
            outline: none;
            border-radius: 5px;

            &::placeholder {
              color: rgba(161, 161, 161, 0.7);
            }
          }

          textarea {
            min-height: 250px;
            padding: 13px 16px;
            background-color: rgba(241, 241, 241, 0.5);
            resize: vertical;
            width: 100%;
            border: 2px solid rgba(139, 139, 139, 0.3);

            &:focus {
              border-color: #FF5F2E;
            }
          }
        }
      }
    }

    // ------------------ SUBMIT BUTTON -------------------
    .submit-btn {
      min-width: 50%;
      padding: 13px 16px;
      border-radius: 5px;
      border: none;
      cursor: pointer;
      background-color: #FF5F2E;
      color: #fff;

    }
  }



`

export {ContactFirstWrapper}