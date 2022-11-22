import styled from "styled-components";

const FormModalWrapper=styled.div`
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }

  padding: 30px 50px;
  display: flex;
  justify-content: space-between;

  .left-side, .right-side {
    width: calc(50% - 15px);
  }

  //====================left

  .left-side {
    color: #fff;
    display: flex;

    &__inner {
      display: flex;
      flex-direction: column;
      //justify-content: space-between;
    }

    &__top {
      margin-bottom: 30px;

      .title {
        font-size: 36px;
        margin-top: 0;
        margin-bottom: 16px;
        color: #fff;
      }

      .text {
        font-size: 15px;
        color: rgba(255, 255, 255, 0.8);
        margin: 0;
      }
    }

    &__center {
      margin-bottom: 30px;
    }

    &__bottom {

    }
  }

  // CONTACTS STYLES
  .contacts-list {
    list-style: none;
    padding: 0;
  }

  .contacts-item:not(:last-child) {
    margin-bottom: 20px;
    
  }

  .contacts-link {
    min-width: 240px;
    max-width: 280px;
    text-overflow: ellipsis;
    padding: 13px 16px;
    border: 2px solid transparent;
    border-radius: 10px;
    text-decoration: none;
    color: #fff;
    font-size: 14px;
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    display: flex;
    align-items: center;

    svg{
      fill: #FF5F2E;
      height: 24px;
      width: 24px;
      margin-right: 20px;
    }


    &:hover {
      border-color: #FF5F2E;
      background-color: rgba(255, 95, 46, 0.1);
    }

    @media (max-width: 767px) {
      max-width: 100%;
      width: 100%;
    }
  }
  
//  ==========================right
  .right-side {
    background-color: #fff;
    color: #222;
    padding: 30px;
    border-radius: 15px;

    &__form {
      display: flex;
      flex-direction: column;
    }

    input, textarea {
      outline: none;
      border-radius: 5px;

      &::placeholder {
        color: rgba(161, 161, 161, 0.7);
      }
    }

    input {
      padding: 13px 16px 13px 40px;
      width: 100%;
      border: 2px solid rgba(139, 139, 139, 0.3);

      &:focus {
        border: 2px solid #FF5F2E;
      }
    }

    input:focus + .svg {
      //color: #007eff;
      color:#FF5F2E;
    }

    textarea {
      min-height: 100px;
      padding: 13px 16px;
      background-color: rgba(241, 241, 241, 0.5);
      resize: vertical;
      width: 100%;
      border: 2px solid rgba(139, 139, 139, 0.3);

      &:focus {
        border-color: #FF5F2E;
      }
    }

    .label {
      margin-bottom: 30px;
      position: relative;

      .error-span {
        position: absolute;
        font-size: 12px;
        font-style: italic;
        color: #e93d3d;
      }

      .svg {
        color: rgba(139, 139, 139, 0.7);
        height: 15px;
        width: 15px;
      }
    }

    .label-name {
      display: block;
      font-size: 14px;
      margin-bottom: 2px;
    }

    .input-wrapper {
      position: relative;

      svg {
        position: absolute;
        top: 50%;
        left: 12px;
        transform: translateY(-50%);
      }
    }


    // ------------------ SUBMIT BUTTON -------------------
    .submit-btn {
      min-width: 50%;
      align-self: end;
      display: inline-block;
      padding: 13px 16px;
      border-radius: 5px;
      border: none;
      cursor: pointer;
      background-color: #FF5F2E;
      color: #fff;

      &:disabled {
        cursor: not-allowed;
        opacity: 0.7;
      }
    }
  }

  // -------------------------- MEDIA STYLES --------------------------------
  @media (max-width: 991px) {
    //width: calc(100vw - 100px);
    padding: 25px 40px;
  }
  @media (max-width: 767px) {
    //width: calc(100vw - 40px);
    padding: 20px 15px;
    flex-wrap: wrap;
    .left-side, .right-side {
      width: 100%; !important;
    }
    .right-side {
      padding: 15px;
      .label {
        margin-bottom: 20px;
      }
    }
  }

  //  ----------------------------- CUSTOM INPUT FILE --------------------------------
  input[type="file"],
  input[type="file"]:active,
  input[type="file"]:focus {
    color: transparent;
    outline: none;
    border: 0;
  }
  input[type="file"] {
    padding: 0 !important;
  }

  .file-name {
    font-size: 18px;
    @media (max-width: 1439px) {
      font-size: 15px;
    }
    @media (max-width: 991px) {
      font-size: 13px;
    }
  }

  // ------
  .custom-file-input {
    color: transparent;
    outline: none;
    margin-bottom: 5px;
    @media (max-width: 767px) {
      padding: 0 !important;
    }
  }

  .custom-file-input:hover {
    border-color: red;
    outline: none;
  }

  .custom-file-input:focus {
    outline: none;
  }

  .custom-file-input::-webkit-file-upload-button {
    visibility: hidden;
    outline: none;
  }

  .custom-file-input::before {
    content: "Select some files";
    transition: border-color 0.3s ease, color 0.3s ease;
    color: rgb(233, 63, 63);
    display: inline-block;
    //background: -webkit-linear-gradient(top, #f9f9f9, #e3e3e3);
    background-color: #fff;
    border: 1px solid rgb(233, 63, 63);
    border-radius: 2px;
    padding: 5px 8px;
    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    cursor: pointer;
    text-shadow: 1px 1px #fff;
    font-weight: 700;

    font-size: 15px;
  }

  .custom-file-input-1::before {
    content: "Attach MedCard";
  }

  .custom-file-input-2::before {
    content: "Attach CDL";
  }

  .custom-file-input:hover::before {
    border-color: rgb(255, 0, 0);
    color: rgb(255, 0, 0);
  }

  .custom-file-input:active {
    outline: 0;
  }

  .custom-file-input:active::before {
    background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
  }

  @media (max-width: 767px) {
    .mobileNone {
      display: none;
    }
  }
`

export{ FormModalWrapper }