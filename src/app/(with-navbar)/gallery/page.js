"use client";
import { Tabs } from "keep-react";
import React from "react";

const Gallery = () => {
  return (
    <div>
      <div className="diff h-[75vh] bg-cover">
        <div className="diff-item-1">
          <div className="bg-blue-300 text-primary-content text-9xl font-black grid place-content-center">
            GALLERY
          </div>
        </div>
        <div className="diff-item-2">
          <div className="bg-base-200 text-9xl font-black grid place-content-center">
            GALLERY
          </div>
        </div>
        <div className="diff-resizer"></div>
      </div>

      <div>
        <div className="flex items-center justify-center md:max-w-screen-xl mx-auto py-4 md:py-8 flex-wrap">
          <Tabs
            type="button"
            className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800"
            aria-label="Tabs"
            style="pills"
          >
            <Tabs.Item active={true} title="Doctors">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="grid gap-4">
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://res.cloudinary.com/drhtv8dr4/image/upload/v1700238337/dentist-standing-with-his-arms-crossed_107420-65264_baynjz.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://res.cloudinary.com/drhtv8dr4/image/upload/v1700239451/doctors-day-curly-handsome-cute-guy-medical-uniform-smiling-waving-hands_140725-162826_uagjqc.avif"
                      alt=""
                    />
                  </div>

                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://res.cloudinary.com/drhtv8dr4/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1700238337/female-doctor-hospital-with-stethoscope_23-2148827776_kefe4c.avif"
                      alt=""
                    />
                  </div>
                </div>
                <div className="grid gap-4">
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://res.cloudinary.com/drhtv8dr4/image/upload/v1700238336/red-bearded-doctor-standing-straight-clinic-near-his-working-place-portrait-physician-medicine-healthcare-concept_665183-16588_ywaxzq.avif"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://res.cloudinary.com/drhtv8dr4/image/upload/v1700238335/portrait-smiling-male-doctor_171337-1532_i3fgpq.avif"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://res.cloudinary.com/drhtv8dr4/image/upload/v1700238336/male-doctor-light-surface_392895-24691_xe8vcn.avif"
                      alt=""
                    />
                  </div>
                </div>
                <div className="grid gap-4">
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://res.cloudinary.com/drhtv8dr4/image/upload/v1700238335/portrait-smiling-young-woman-doctor-healthcare-medical-worker-pointing-fingers-left-showing-clini_1258-88433_twnopr.avif"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://res.cloudinary.com/drhtv8dr4/image/upload/v1700239452/portrait-cheerful-smiling-young-doctor-with-stethoscope-neck-medical-coat_255757-1415_yqwdxi.avif"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://res.cloudinary.com/drhtv8dr4/image/upload/v1700238336/young-brunette-female-doctor-standing-with-arms-crossed-smiling-hospital-health-care-insurance-help-concept-physician-ready-examine-patient_665183-3946_bb87xz.avif"
                      alt=""
                    />
                  </div>
                </div>
                <div className="grid gap-4">
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://res.cloudinary.com/drhtv8dr4/image/upload/v1700239451/covid-19-coronavirus-outbreak-healthcare-workers-pandemic-concept-confident-male-doctor-professional-therapist-clinic-show-okay-gesture-recommend-guarantee-quality_1258-57510_r0m7uc.avif"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://res.cloudinary.com/drhtv8dr4/image/upload/v1700239450/medium-shot-smiley-doctor-with-stethoscope_23-2149351651_zut6ss.avif"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://res.cloudinary.com/drhtv8dr4/image/upload/v1698045652/a2775105-9593-4562-9b9b-b361f86a90ed_yvsgat.webp"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </Tabs.Item>
            <Tabs.Item title="Patients">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="grid gap-4">
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://res.cloudinary.com/drhtv8dr4/image/upload/v1700240130/doctor-home-concept-illustration_114360-7060_vee11i.avif"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://res.cloudinary.com/drhtv8dr4/image/upload/v1700240132/senior-woman-talking-with-her-doctor_23-2148962385_dqu1ir.avif"
                      alt=""
                    />
                  </div>

                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://res.cloudinary.com/drhtv8dr4/image/upload/v1700240132/male-caregiver-talking-with-sick-old-lady-lying-hospital-bed-he-takes-hand-woman_482257-20762_lev8h5.avif"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://res.cloudinary.com/drhtv8dr4/image/upload/v1700240131/medium-shot-smiley-man-nurse_23-2148940078_imkxwi.avif"
                      alt=""
                    />
                  </div>
                </div>
                <div className="grid gap-4">
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://res.cloudinary.com/drhtv8dr4/image/upload/v1700240735/female-doctor-helping-old-woman-nursing-home-use-wifi-tablet-computer_482257-45300_uusrtw.avif"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://res.cloudinary.com/drhtv8dr4/image/upload/v1700240131/nurse-caring-elderly_602838-568_gxpign.avif"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://res.cloudinary.com/drhtv8dr4/image/upload/v1700240130/kind-carer-measuring-blood-pressure-happy-elderly-woman-bed-nursing-home_1212-2352_zdvjjy.avif"
                      alt=""
                    />
                  </div>
                </div>
                <div className="grid gap-4">
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://res.cloudinary.com/drhtv8dr4/image/upload/v1700240130/hospital-family-visit-concept-illustration_114360-8273_btwmqq.avif"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://res.cloudinary.com/drhtv8dr4/image/upload/v1700240130/female-doctor-with-stethoscope-sharing-comfort-old-man-nursing-home_482257-45340_wqbrcw.avif"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://res.cloudinary.com/drhtv8dr4/image/upload/v1700240129/nurse-old-man-posing-while-looking-camera_23-2148239041_vneanx.avif"
                      alt=""
                    />
                  </div>
                </div>
                <div className="grid gap-4">
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://res.cloudinary.com/drhtv8dr4/image/upload/v1700240129/doctor-vaccinating-little-girl-that-s-supported-by-her-mother_23-2148755610_onrzks.avif"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://res.cloudinary.com/drhtv8dr4/image/upload/v1700240129/thumbs-up-old-man-who-sits-wheelchair_85574-14699_qywa4h.avif"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://res.cloudinary.com/drhtv8dr4/image/upload/v1700240130/hospital-bed-concept-illustration_114360-8239_nwq4pf.avif"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </Tabs.Item>
            <Tabs.Item title="Places">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="grid gap-4">
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://res.cloudinary.com/drhtv8dr4/image/upload/v1700241563/xgyrncwwimvpx7cn6yds.avif"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://res.cloudinary.com/drhtv8dr4/image/upload/v1700241563/l8sbxe5affatzctsaxh0.avif"
                      alt=""
                    />
                  </div>

                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://res.cloudinary.com/drhtv8dr4/image/upload/v1700241563/bxhvjqkq1lvs2pkzxfru.avif"
                      alt=""
                    />
                  </div>
                </div>
                <div className="grid gap-4">
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://res.cloudinary.com/drhtv8dr4/image/upload/v1700241562/juomy3gqouhzeklcz2hx.avif"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://res.cloudinary.com/drhtv8dr4/image/upload/v1700241562/taa2ebuhkxyojepjsgaw.avif"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://res.cloudinary.com/drhtv8dr4/image/upload/v1700241562/ktkmaw32e0bapd9c0ebm.avif"
                      alt=""
                    />
                  </div>
                </div>
                <div className="grid gap-4">
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://res.cloudinary.com/drhtv8dr4/image/upload/v1700241562/rcn0pyucuo3niyorbpht.avif"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://res.cloudinary.com/drhtv8dr4/image/upload/v1700241562/kfertrkxaop7izcedlvz.avif"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://res.cloudinary.com/drhtv8dr4/image/upload/v1700241562/or0g2i55vnht8j5ry7ap.avif"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://res.cloudinary.com/drhtv8dr4/image/upload/v1700242156/interior-view-operating-room_67340-34_kd5uz9.avif"
                      alt=""
                    />
                  </div>
                </div>
                <div className="grid gap-4">
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://res.cloudinary.com/drhtv8dr4/image/upload/v1700242214/interior-view-operating-room_67340-34_hqlyij.avif"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://res.cloudinary.com/drhtv8dr4/image/upload/v1700242156/operating-room-with-modern-equipment-spacious-bright-operating-room-operating-unit-ready-surgery_124865-10081_rsatzj.avif"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://res.cloudinary.com/drhtv8dr4/image/upload/v1700242156/recovery-room-with-beds-comfortable-medical-interior-empty-hospital-room-clean-empty-room-with-bed-new-medical-center_38052-211_drg16l.avif"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://res.cloudinary.com/drhtv8dr4/image/upload/v1700242156/no-people-hospital-reception-desk-medical-appointments-checkup-visit-waiting-room-lobby-with-counter-indoors-give-support-advice-modern-healthcare-facility_482257-44451_a01ptf.avif"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </Tabs.Item>
            <Tabs.Item title="Others Worker">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="grid gap-4">
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://res.cloudinary.com/drhtv8dr4/image/upload/v1700238337/dentist-standing-with-his-arms-crossed_107420-65264_baynjz.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://res.cloudinary.com/drhtv8dr4/image/upload/v1700239451/doctors-day-curly-handsome-cute-guy-medical-uniform-smiling-waving-hands_140725-162826_uagjqc.avif"
                      alt=""
                    />
                  </div>

                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://res.cloudinary.com/drhtv8dr4/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1700238337/female-doctor-hospital-with-stethoscope_23-2148827776_kefe4c.avif"
                      alt=""
                    />
                  </div>
                </div>
                <div className="grid gap-4">
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://res.cloudinary.com/drhtv8dr4/image/upload/v1700238336/red-bearded-doctor-standing-straight-clinic-near-his-working-place-portrait-physician-medicine-healthcare-concept_665183-16588_ywaxzq.avif"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://res.cloudinary.com/drhtv8dr4/image/upload/v1700238335/portrait-smiling-male-doctor_171337-1532_i3fgpq.avif"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://res.cloudinary.com/drhtv8dr4/image/upload/v1700238336/male-doctor-light-surface_392895-24691_xe8vcn.avif"
                      alt=""
                    />
                  </div>
                </div>
                <div className="grid gap-4">
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://res.cloudinary.com/drhtv8dr4/image/upload/v1700238335/portrait-smiling-young-woman-doctor-healthcare-medical-worker-pointing-fingers-left-showing-clini_1258-88433_twnopr.avif"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://res.cloudinary.com/drhtv8dr4/image/upload/v1700239452/portrait-cheerful-smiling-young-doctor-with-stethoscope-neck-medical-coat_255757-1415_yqwdxi.avif"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://res.cloudinary.com/drhtv8dr4/image/upload/v1700238336/young-brunette-female-doctor-standing-with-arms-crossed-smiling-hospital-health-care-insurance-help-concept-physician-ready-examine-patient_665183-3946_bb87xz.avif"
                      alt=""
                    />
                  </div>
                </div>
                <div className="grid gap-4">
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://res.cloudinary.com/drhtv8dr4/image/upload/v1700239451/covid-19-coronavirus-outbreak-healthcare-workers-pandemic-concept-confident-male-doctor-professional-therapist-clinic-show-okay-gesture-recommend-guarantee-quality_1258-57510_r0m7uc.avif"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://res.cloudinary.com/drhtv8dr4/image/upload/v1700239450/medium-shot-smiley-doctor-with-stethoscope_23-2149351651_zut6ss.avif"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://res.cloudinary.com/drhtv8dr4/image/upload/v1698045652/a2775105-9593-4562-9b9b-b361f86a90ed_yvsgat.webp"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </Tabs.Item>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
