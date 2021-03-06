import React from "react";
import styled from "styled-components";
import Link from "next/link";

import UserProfile from "components/compounds/UserProfile";
import PostsBlock from "components/compounds/PostsBlock";
import DashboardLayoutBase from "components/layouts/DashboardLayoutBase";
import UserProfileContainerDashboard from "components/containers/UserProfileContainerDashboard";

import { getAuth } from "actions/auth";

/*
Props
variant - "admin" (default), "member"
headingText - String
withBackButton - Boolean
 */
const DashboardLayoutMain = (props) => {
  const { variant, postsData = [] } = props;

  const auth = getAuth();

  return (
    <S.DashboardLayoutMain {...props}>
      <DashboardLayoutBase {...props}>
        <UserProfileContainerDashboard
          className="DashboardLayout__UserProfile"
          data={auth}
        ></UserProfileContainerDashboard>

        <div className="DashboardLayout__control-group">
          <Link href="/user/update">
            <a>
              <button className="DarkButton">Edit Profile</button>
            </a>
          </Link>

          {variant === "admin" && (
            <Link href="/admin/manage-posts">
              <a>
                <button className="DarkButton">
                  Manage All Deblogger Posts
                </button>
              </a>
            </Link>
          )}
        </div>

        <PostsBlock
          as="section"
          headingText="My Posts"
          variant="withControls"
          postsData={postsData}
        ></PostsBlock>
      </DashboardLayoutBase>
    </S.DashboardLayoutMain>
  );
};

const S = {};

S.DashboardLayoutMain = styled.div`
  .DashboardLayout__UserProfile {
    margin-bottom: ${(p) => p.theme.size[32]};
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    .DashboardLayout__UserProfile {
      margin-bottom: ${(p) => p.theme.size[24]};
    }
  }

  .DashboardLayout__control-group {
    margin-bottom: ${(p) => p.theme.size[64]};

    > *:not(:last-child) {
      margin-right: ${(p) => p.theme.size[16]};
    }
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    .DashboardLayout__control-group {
      margin-bottom: ${(p) => p.theme.size[48]};
      display: flex;
      flex-flow: row wrap;

      > *:not(:last-child) {
        margin-right: ${(p) => p.theme.size[16]};
        margin-bottom: ${(p) => p.theme.size[16]};
      }
    }
  }

  .DarkButton {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding-left: ${(p) => p.theme.size[24]};
    padding-right: ${(p) => p.theme.size[24]};
    height: ${(p) => p.theme.size[48]};
    background-color: ${(p) => p.theme.color.dark};
    border-radius: 8px;
    box-shadow: ${(p) => p.theme.shadow.small};
    font-size: 1.1875em;
    @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
      font-size: 1em;
    }
  }
`;

export default DashboardLayoutMain;
