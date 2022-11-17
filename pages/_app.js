import '../styles/globals.css'
import "antd/dist/antd.css";
import {ModalProvider} from "../src/Context/ModalContext/Context";
import Modal from "../src/Components/Pages/ApplyModal"
import FormModal from "../src/Components/Pages/ApplyModal/FormModal";

function MyApp({Component, pageProps}) {
  return (
    <ModalProvider>
      <Component {...pageProps} />
      <Modal>
        <FormModal/>
      </Modal>
    </ModalProvider>
  )
}

export default MyApp
