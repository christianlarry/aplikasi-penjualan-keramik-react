import { LuFacebook, LuInstagram } from "react-icons/lu";
import { Link } from "react-router";
import Logo from "../atoms/logo/Logo";
import bisnisStrings from "../../../constants/bisnis.strings";

const Footer = () => {
  return (
    <footer className="mt-24 mb-4">
      <div className="flex flex-col gap-8">
        <section>
          <div className="bg-stone-700 px-5 py-5 text-white">
            <b>Offline Store:</b> {bisnisStrings.location.string}
          </div>
        </section>

        <section>
          <div className="max-w-7xl mx-auto px-5">
            <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-24">
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold">Kontak</h3>
                <ul className="text-sm">
                  <li><Link to={`tel://${bisnisStrings.contact.telephone}`} className="hover:underline">Call Center: {bisnisStrings.contact.telephone}</Link></li>
                  <li><Link to={`mailto:${bisnisStrings.contact.email}`} className="hover:underline">Email: {bisnisStrings.contact.email}</Link></li>
                  <li><p>Alamat: {bisnisStrings.location.string}</p></li>
                </ul>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold">Sosial Media</h3>
                <p className="text-sm">Ikuti sosial media kami untuk update terbaru!</p>
                <ul className="text-2xl flex gap-2">
                  <li><Link to={bisnisStrings.socialMediaLink.facebook} target="_blank"><LuFacebook/></Link></li>
                  <li><Link to={bisnisStrings.socialMediaLink.instagram} target="_blank"><LuInstagram/></Link></li>
                </ul>
              </div>
              <div>
                <div className="w-[200px]">
                  <Link to={"/"}>
                    <Logo/>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="pt-4 border-t border-gray-200">
            
            <div className="max-w-7xl mx-auto px-5">
              <p className="text-center text-base">© 2025 Christian Larry Jo Rondonuwu. All Rights Reserved</p>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
