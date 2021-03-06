import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

import DebloggerLogo from "components/DebloggerLogo";
import UserAvatar from "components/UserAvatar";
import MobileCategoryNav from "components/MobileCategoryNav";
import UppercaseTextButton from "components/buttons/UppercaseTextButton";
import NormalTextButton from "components/buttons/NormalTextButton";
import FilledButton from "components/buttons/FilledButton";
import UserAvatarContainer from "components/containers/UserAvatarContainer";

import { getAuth } from "actions/auth";

const MobileHeader = (props) => {
  const [isUserControlsOpen, setIsUserControlsOpen] = useState(false);
  const [isMobileCategoryNavOpen, setIsMobileCategoryNavOpen] = useState(false);
  const auth = getAuth();

  const openUserControls = () => {
    setIsUserControlsOpen(true);
  };

  const closeUserControls = () => {
    setIsUserControlsOpen(false);
  };

  const toggleMobileCategoryNav = () => {
    setIsMobileCategoryNavOpen(!isMobileCategoryNavOpen);
  };

  const closeMobileCategoryNav = () => {
    setIsMobileCategoryNavOpen(false);
  };

  return (
    <>
      <S.MobileHeader as="header" {...props}>
        <DebloggerLogo variant="initials"></DebloggerLogo>

        <button
          className="MobileHeader__pageLabel-button"
          onClick={toggleMobileCategoryNav}
        >
          Homepage
        </button>

        {auth ? (
          <>
            <UserAvatarContainer
              as="button"
              onClick={openUserControls}
            ></UserAvatarContainer>

            {isUserControlsOpen === true && (
              <MobileUserControls
                handleCloseUserControls={closeUserControls}
              ></MobileUserControls>
            )}
          </>
        ) : (
          <Link href="/sign-in" passHref={true}>
            <a>
              <UppercaseTextButton className="MobileHeader__UppercaseTextButton">
                Sign In
              </UppercaseTextButton>
            </a>
          </Link>
        )}
      </S.MobileHeader>

      {isMobileCategoryNavOpen === true && (
        <MobileCategoryNav></MobileCategoryNav>
      )}
    </>
  );
};

const S = {};

S.MobileHeader = styled.div`
  display: none;
  align-items: center;
  justify-content: space-between;
  height: ${(p) => p.theme.size[64]};
  background-color: ${(p) => p.theme.color.dark};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 ${(p) => p.theme.size[16]};
  z-index: 100;

  .MobileHeader__pageLabel-button {
    font-size: 1.1875em;
    font-weight: 700;
    color: ${(p) => p.theme.color.primary.main};
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    height: ${(p) => p.theme.size[48]};
  }
`;

const MobileUserControls = (props) => {
  const { handleCloseUserControls } = props;

  return (
    <S.MobileUserControls as="section" {...props}>
      <div className="MobileUserControls__user-block">
        <div className="MobileUserControls__userInfo-block">
          <div className="MobileUserControls__userInfoName-text">
            Paul McKittens
          </div>

          <div className="MobileUserControls__userInfoUsername-text">
            @paulmck
          </div>
        </div>

        <UserAvatarContainer
          as="button"
          onClick={handleCloseUserControls}
        ></UserAvatarContainer>
      </div>

      <FilledButton className="MobileUserControls__write-FilledButton">
        Write a Post
      </FilledButton>

      <Link href="/admin">
        <a className="MobileUserControls__dashboard-NormalTextButton">
          <NormalTextButton>Admin Dashboard</NormalTextButton>
        </a>
      </Link>

      <UppercaseTextButton
        as="button"
        className="MobileUserControls__logout-UppercaseTextButton"
      >
        Log out
      </UppercaseTextButton>

      <div
        className="MobileUserControls__background-graphic"
        onClick={handleCloseUserControls}
      ></div>
    </S.MobileUserControls>
  );
};

S.MobileUserControls = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: flex-end;
  flex-flow: column;
  padding-top: ${(p) => p.theme.size[8]};
  padding-right: ${(p) => p.theme.size[16]};

  .MobileUserControls__user-block {
    display: flex;
    align-items: center;
    margin-bottom: ${(p) => p.theme.size[24]};
  }

  .MobileUserControls__userInfo-block {
    text-align: right;
    margin-right: ${(p) => p.theme.size[12]};
  }

  .MobileUserControls__userInfoName-text {
    font-size: 1em;
    margin-bottom: ${(p) => p.theme.size[8]};
  }

  .MobileUserControls__userInfoUsername-text {
    font-size: 0.875em;
    color: ${(p) => p.theme.color.lightMuted};
  }

  .MobileUserControls__write-FilledButton {
    margin-bottom: ${(p) => p.theme.size[16]};
  }

  .MobileUserControls__dashboard-NormalTextButton {
    margin-bottom: ${(p) => p.theme.size[8]};
  }

  .MobileUserControls__background-graphic {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${(p) => p.theme.color.dark}F2;
    z-index: -1;
  }
`;

export default MobileHeader;
