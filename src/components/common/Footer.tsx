const Footer = (): JSX.Element => {
  return (
    <footer className="p-10 footer bg-base-200 fill-base-content footer-center">
      <div className="grid grid-flow-col gap-4">
        <a href="https://zero-base.co.kr/" target="_blank" className="link link-hover">
          제로베이스
        </a>
      </div>
      <ul className="flex">
        <li>
          <img src="../../../src/assets/img/svg/visa.svg" alt="visa" />
        </li>
        <li>
          <img src="../../../src/assets/img/svg/master.svg" alt="master" />
        </li>
        <li>
          <img src="../../../src/assets/img/svg/americanExpress.svg" alt="americanExpress" />
        </li>
        <li>
          <img src="../../../src/assets/img/svg/paypal.svg" alt="paypal" />
        </li>
        <li>
          <img src="../../../src/assets/img/svg/dinersClub.svg" alt="dinersClub" />
        </li>
        <li>
          <img src="../../../src/assets/img/svg/discover.svg" alt="discover" />
        </li>
      </ul>
      <div className="grid grid-flow-col gap-4">
        <a href="https://www.instagram.com/zerobase.official" target="_blank" data-tip="facebook" className="tooltip">
          <img src="../../../src/assets/img/svg/facebook-f.svg" alt="" className="w-6 h-6" />
        </a>
        <a href="https://www.instagram.com/zerobase.official" target="_blank" data-tip="instagram" className="tooltip">
          <img src="../../../src/assets/img/svg/instagram.svg" alt="" className="w-6 h-6" />
        </a>
        <a href="https://github.com/oinochoe" target="_blank" data-tip="github" className="tooltip">
          <img src="../../../src/assets/img/svg/github.svg" alt="" className="w-6 h-6" />
        </a>
      </div>
      <p>Copyright © 2022 Zero Base</p>
    </footer>
  );
};

export default Footer;
