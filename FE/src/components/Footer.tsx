function Footer() {
  return (
    <footer className=" shadow-md">
      <div className=" container flex space-x-20 items-start py-4">
        <section className=" w-[400px]">
          <h3>Công ty cổ phần Canifa</h3>
          <p>
            Số ĐKKD: 0107574310, ngày cấp: 23/09/2016, Nơi cấp: Sở Kế hoạch và
            đầu tư Hà Nội Địa chỉ trụ sở tại số 688 Đường Quang Trung, Phường La
            Khê, Quận Hà Đông, Thành phố Hà Nội.
          </p>
          <p>
            Địa chỉ liên hệ: P301, tầng 3, tòa nhà GP Invest, số 170 La Thành,
            Phường Ô Chợ Dừa, Quận Đống Đa, Thành Phố Hà Nội.
          </p>
          <ul>
            <li>Điện thoại: +8424 - 7303.0222</li>
            <li>Fax: +8424 - 6277.6419</li>

            <li>Email: hello@canifa.com</li>
          </ul>
          <ul className=" flex  justify-around items-center w-40">
            <li>
              <a href="#">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-tiktok"></i>
              </a>
            </li>
          </ul>
        </section>
        <section>
          <h3>Thương hiệu</h3>
          <ul>
            <li>Giới thiệu</li>
            <li>Tin tức</li>
            <li>Tuyển dụng</li>
            <li>Cộng đồng</li>
          </ul>
        </section>
        <section>
          <h3>Hỗ trợ</h3>
          <ul>
            <li>Giới thiệu</li>
            <li>Tin tức</li>
            <li>Tuyển dụng</li>
            <li>Cộng đồng</li>
          </ul>
        </section>
        <section>
          <h3>Kiểm thử</h3>
          <ul>
            <li>Giới thiệu</li>
            <li>Tin tức</li>
            <li>Tuyển dụng</li>
            <li>Cộng đồng</li>
          </ul>
        </section>
      </div>
      <div className=" container">
        <h3>© 2023 CANIFA</h3>
      </div>
    </footer>
  );
}

export default Footer;
