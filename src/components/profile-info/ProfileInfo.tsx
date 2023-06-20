import { useEffect, useState } from "react";
import { getEntryBy } from "../../../lib/helpers";
import {
  TypePersonalInfo,
  TypePersonalInfoList,
  TypePersonalInfoSkeleton,
} from "@/types/contentfulv10";
import { Asset } from "contentful";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faGlasses } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../ui";
import styles from "./ProfileInfo.module.css";
import LazyImage from "../ui/LazyImage";

const ProfileInfo = () => {
  const [profileInfo, setProfileInfo] = useState<TypePersonalInfo>();
  const [subList, setSubList] = useState<TypePersonalInfoList[]>();
  const [profilePic, setProfilePic] = useState<string>();

  const getProfileInfo = async () => {
    const profile = await getEntryBy<TypePersonalInfoSkeleton>(
      "3ZkUbDrkygOqV4ZX0pTwsP"
    );

    const list = profile?.fields?.subList as TypePersonalInfoList[];
    const profileImage = profile?.fields?.profileImage as Asset<
      undefined,
      string
    >;

    setProfileInfo(profile);
    setSubList(list);
    setProfilePic(`https:${profileImage.fields.file?.url}`);
  };

  useEffect(() => {
    getProfileInfo();
  }, []);

  return (
    <div className={styles.profile_card}>
      <div className="px-6 py-4">
        <h1 className={styles.profile_title}>
          {profileInfo?.fields?.fullName.toString()}
        </h1>
        <h2 className={styles.profile_sub_title}>
          {profileInfo?.fields?.jobTitle.toString()}
        </h2>
      </div>
      <div className={styles.profile_image}>
        {profilePic && (
          <LazyImage
            src={profilePic}
            alt={profileInfo?.fields?.fullName?.toString()}
            classes="h-full"
          />
        )}
        <div className={styles.profile_icon}>
          <FontAwesomeIcon icon={faGlasses} />
        </div>
      </div>
      <ul className="px-6 py-8">
        {subList?.map((sub) => (
          <li key={sub.sys.id}>
            <div className="flex items-center gap-1">
              <h1 className="font-bold">{sub.fields.title?.toString()}:</h1>
              <h2 className="text-slate-500">
                {sub.fields.content?.toString()}
              </h2>
            </div>
          </li>
        ))}
      </ul>
      <div className=" flex justify-center">
        <Button icon={faDownload} title="Download CV" className="mb-4" />
      </div>
    </div>
  );
};

export default ProfileInfo;
