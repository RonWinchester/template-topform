/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from '../../img/topform-store-2_615ae3.svg'

function Footer() {
  return (
    <footer>
      <div className="footer_top">
        <div className="container">
          <div className="footer__logo">
            <img
              src={logo}
              alt="TopForm"
            />
          </div>
          <div className="footer__contacts">
            <a
              className="footer__contacts_item footer_phone"
              href="tel:+78127777777"
            >
              <svg
                width="27"
                height="24"
                viewBox="0 0 27 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.6328 20.9493L14.5511 21.0106C12.9396 22.6222 8.59301 21.2955 5.59352 18.2971C2.61446 15.318 1.30926 10.9725 2.92084 9.36088C3.61531 8.66641 4.20663 8.31918 4.69582 8.36105C5.02263 8.38148 5.32799 8.60616 5.63437 9.01365L6.59335 10.5445L6.61378 10.565C6.81803 10.8295 6.87829 11.1369 6.79761 11.4014C6.7159 11.6669 6.49122 11.8906 6.14399 12.0142C5.40969 12.2593 5.02263 12.871 5.10331 13.687C5.30756 15.6867 8.2662 18.7873 10.225 19.0528L10.4895 19.0732C11.1636 19.0732 11.6732 18.7056 11.9173 18.053C12.0807 17.6455 12.3656 17.3187 12.6934 17.2165C12.9181 17.1553 13.1418 17.1961 13.3665 17.3595L13.3879 17.3799L14.9178 18.3389C15.3467 18.6443 15.5499 18.9507 15.5704 19.2775C15.6122 19.7044 15.2854 20.2763 14.6328 20.9493Z"
                  fill="#0044A4"
                ></path>
                <path
                  d="M9.44678 8.42561C11.424 8.42561 13.2051 9.22425 14.5011 10.5192C15.7971 11.8162 16.5947 13.5974 16.5957 15.5745C16.5957 16.1383 17.0522 16.5958 17.617 16.5958C18.1818 16.5958 18.6383 16.1383 18.6383 15.5745C18.6373 10.4978 14.5235 6.38306 9.44678 6.38306C8.88304 6.38306 8.42551 6.84059 8.42551 7.40433C8.42551 7.96808 8.88304 8.42561 9.44678 8.42561Z"
                  fill="#0044A4"
                ></path>
                <path
                  d="M9.44678 4.3404C12.5525 4.3404 15.3549 5.59555 17.3903 7.63096C19.4247 9.66738 20.6798 12.4687 20.6808 15.5744C20.6808 16.1382 21.1373 16.5957 21.7021 16.5957C22.2669 16.5957 22.7234 16.1382 22.7234 15.5744C22.7224 8.24066 16.7806 2.29785 9.44678 2.29785C8.88304 2.29785 8.42551 2.75538 8.42551 3.31913C8.42551 3.88287 8.88304 4.3404 9.44678 4.3404Z"
                  fill="#0044A4"
                ></path>
              </svg>
              +7 (812) 777-77-77
            </a>
            <a
              className="footer__contacts_item footer_email"
              href="mailto:office@topform.ru"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 10.496V15C4 15.7956 4.31607 16.5587 4.87868 17.1213C5.44129 17.6839 6.20435 18 7 18H17C17.7956 18 18.5587 17.6839 19.1213 17.1213C19.6839 16.5587 20 15.7956 20 15V10.496L12.41 13.912C12.2811 13.97 12.1413 13.9999 12 13.9999C11.8587 13.9999 11.7189 13.97 11.59 13.912L4 10.496ZM4.074 8.336L12 11.904L19.926 8.336C19.7754 7.67255 19.4038 7.07998 18.8721 6.65552C18.3405 6.23106 17.6803 5.99991 17 6H7C6.31968 5.99991 5.65952 6.23106 5.12786 6.65552C4.59619 7.07998 4.22458 7.67255 4.074 8.336Z"
                  fill="#0044A4"
                ></path>
              </svg>
              office@topform.ru
            </a>
            <p className="footer__contacts_item footer_address">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.2857 3C14.218 3 16.0712 3.7676 17.4375 5.13394C18.8038 6.50027 19.5714 8.35342 19.5714 10.2857C19.5714 13.302 17.2724 16.4624 12.7714 19.8381C12.6313 19.9432 12.4609 20 12.2857 20C12.1106 20 11.9401 19.9432 11.8 19.8381C7.29905 16.4624 5 13.302 5 10.2857C5 8.35342 5.7676 6.50027 7.13394 5.13394C8.50027 3.7676 10.3534 3 12.2857 3ZM12.2857 7.85714C11.6416 7.85714 11.0239 8.11301 10.5685 8.56846C10.113 9.0239 9.85714 9.64162 9.85714 10.2857C9.85714 10.9298 10.113 11.5475 10.5685 12.003C11.0239 12.4584 11.6416 12.7143 12.2857 12.7143C12.9298 12.7143 13.5475 12.4584 14.003 12.003C14.4584 11.5475 14.7143 10.9298 14.7143 10.2857C14.7143 9.64162 14.4584 9.0239 14.003 8.56846C13.5475 8.11301 12.9298 7.85714 12.2857 7.85714Z"
                  fill="#0044A4"
                ></path>
              </svg>
              Санкт-Петербург, ул. Мончегорская, д. 8
            </p>
          </div>
          <div className="footer__socials">
            <button
              type="button"
              className="btn_default footer__btn_call js-open-callback"
            >
              Заказать звонок
            </button>
            <div className="socials_list">
              <a href="https://vk.com/club9718850" className="socials_item">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="12"
                    cy="11.9999"
                    rx="10.6667"
                    ry="10.6667"
                    fill="#0044A4"
                  ></ellipse>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.7333 8.54171C18.8282 8.22971 18.7333 8 18.279 8H16.779C16.3973 8 16.2213 8.19829 16.1259 8.41714C16.1259 8.41714 15.363 10.2434 14.2825 11.4297C13.9327 11.7737 13.7739 11.8829 13.583 11.8829C13.4876 11.8829 13.3442 11.7737 13.3442 11.4611V8.54171C13.3442 8.16686 13.239 8 12.9213 8H10.5625C10.3242 8 10.1807 8.17371 10.1807 8.33886C10.1807 8.69371 10.7213 8.776 10.7767 9.77486V11.9451C10.7767 12.4211 10.6893 12.5074 10.4985 12.5074C9.98988 12.5074 8.75274 10.6726 8.01846 8.57314C7.87617 8.16457 7.73217 8 7.34874 8H5.8476C5.41903 8 5.33331 8.19829 5.33331 8.41714C5.33331 8.80686 5.84188 10.7429 7.70188 13.3034C8.94188 15.052 10.6876 16 12.2779 16C13.2316 16 13.3493 15.7897 13.3493 15.4269V14.1051C13.3493 13.684 13.4396 13.6 13.7419 13.6C13.9647 13.6 14.3459 13.7097 15.2362 14.5526C16.2533 15.552 16.4207 16 16.9933 16H18.4933C18.9219 16 19.1367 15.7897 19.0133 15.3737C18.8773 14.96 18.3916 14.3594 17.7476 13.6469C17.3979 13.2411 16.8733 12.804 16.7139 12.5851C16.4916 12.3046 16.555 12.1794 16.7139 11.9297C16.7139 11.9297 18.5425 9.40057 18.7327 8.54171H18.7333Z"
                    fill="white"
                  ></path>
                </svg>
              </a>
              <a href="#" className="socials_item">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.3262 11.9965C23.3262 5.73752 18.2512 0.666748 11.9964 0.666748C5.73746 0.666748 0.666687 5.73752 0.666687 11.9965C0.666687 17.65 4.80842 22.3377 10.2262 23.1867V15.2722H7.34911V11.9972H10.2262V9.4997C10.2262 6.66089 11.915 5.09314 14.5039 5.09314C15.7438 5.09314 17.0417 5.31407 17.0417 5.31407V8.1019H15.6106C14.2057 8.1019 13.7667 8.97641 13.7667 9.87217V11.9965H16.9086L16.4037 15.2715H13.7667V23.186C19.1802 22.337 23.3262 17.6493 23.3262 11.9958V11.9965Z"
                    fill="#0044A4"
                  ></path>
                </svg>
              </a>
              <a href="#" className="socials_item">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.9236 11.7996L11.2284 10.542C10.9932 10.4328 10.8 10.5552 10.8 10.8156V13.1844C10.8 13.4448 10.9932 13.5672 11.2284 13.458L13.9224 12.2004C14.1588 12.09 14.1588 11.91 13.9236 11.7996ZM12 0.47998C5.63758 0.47998 0.47998 5.63758 0.47998 12C0.47998 18.3624 5.63758 23.52 12 23.52C18.3624 23.52 23.52 18.3624 23.52 12C23.52 5.63758 18.3624 0.47998 12 0.47998ZM12 16.68C6.10318 16.68 5.99998 16.1484 5.99998 12C5.99998 7.85158 6.10318 7.31998 12 7.31998C17.8968 7.31998 18 7.85158 18 12C18 16.1484 17.8968 16.68 12 16.68Z"
                    fill="#0044A4"
                  ></path>
                </svg>
              </a>
              <a href="#" className="socials_item">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12.0001"
                    r="11.3333"
                    fill="#0044A4"
                  ></circle>
                  <path
                    d="M11.9985 9.99915C10.8968 9.99915 9.99765 10.8983 9.99765 12C9.99765 13.1017 10.8968 14.0009 11.9985 14.0009C13.1002 14.0009 13.9993 13.1017 13.9993 12C13.9993 10.8983 13.1002 9.99915 11.9985 9.99915ZM17.9996 12C17.9996 11.1714 18.0071 10.3504 17.9605 9.52333C17.914 8.56268 17.6948 7.7101 16.9924 7.00763C16.2884 6.30365 15.4373 6.086 14.4767 6.03947C13.6481 5.99294 12.8271 6.00045 12 6.00045C11.1714 6.00045 10.3504 5.99294 9.52333 6.03947C8.56268 6.086 7.7101 6.30515 7.00763 7.00763C6.30365 7.7116 6.086 8.56268 6.03947 9.52333C5.99294 10.3519 6.00045 11.1729 6.00045 12C6.00045 12.8271 5.99294 13.6496 6.03947 14.4767C6.086 15.4373 6.30515 16.2899 7.00763 16.9924C7.7116 17.6963 8.56268 17.914 9.52333 17.9605C10.3519 18.0071 11.1729 17.9996 12 17.9996C12.8286 17.9996 13.6496 18.0071 14.4767 17.9605C15.4373 17.914 16.2899 17.6948 16.9924 16.9924C17.6963 16.2884 17.914 15.4373 17.9605 14.4767C18.0086 13.6496 17.9996 12.8286 17.9996 12ZM11.9985 15.0786C10.2948 15.0786 8.91992 13.7037 8.91992 12C8.91992 10.2963 10.2948 8.92142 11.9985 8.92142C13.7021 8.92142 15.0771 10.2963 15.0771 12C15.0771 13.7037 13.7021 15.0786 11.9985 15.0786ZM15.2032 9.51432C14.8054 9.51432 14.4842 9.1931 14.4842 8.79533C14.4842 8.39757 14.8054 8.07635 15.2032 8.07635C15.6009 8.07635 15.9221 8.39757 15.9221 8.79533C15.9223 8.88979 15.9038 8.98333 15.8677 9.07062C15.8316 9.1579 15.7786 9.23721 15.7118 9.304C15.645 9.37079 15.5657 9.42374 15.4784 9.45983C15.3912 9.49592 15.2976 9.51444 15.2032 9.51432Z"
                    fill="white"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="container">
          <div className="copyright">© 2021 TopForm</div>
          <a href="#" className="policy">
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
