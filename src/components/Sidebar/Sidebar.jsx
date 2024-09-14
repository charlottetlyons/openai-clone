import React, { useCallback } from "react";
import styled from "styled-components";
import ButtonBar from "../Sidebar/ButtonBar.jsx";
import { StyledSVG } from "../common/StyledSVG.jsx";
import { useState } from "react";

const StyledSidebarDrawer = styled.div`
  width: 260px;
  height: 100%;
  background-color: #f9f9f9;
  overflow-x: hidden;
  flex-shrink: 0;
  min-height: 0;
  display: flex;
  app-region: drag;
  position: relative;
  border-color: #fff3;
  box-sizing: border-box;
`;

const StyledSidebarNav = styled.nav`
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  flex-direction: column;
  width: 100%;
  height 100%;
  display: flex;
`;

const StyledButtonBarSection = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  height: 3.5rem;
  scrollbar-color: #ececec transparent;
  border: 0 solid #e3e3e3;
`;

const StyledChatGPTSection = styled.div`
  padding-top: 0;
  background-color: #f9f9f9;
`;

const StyledChatGPTButton = styled.a`
  padding-left: .5rem;
  padding-right: .5rem;
  font-weight: 400;
  background-color: #f9f9f9;
  border-radius: .5rem;
  gap: .625rem;
  align-items: center;
  height: 2.5rem;
  display: flex;

  &:hover {
    // TODO: make common colors
    background-color: #ececec
  }
`;

const StyledChatGPTIconContainer = styled.div`
  flex-shrink: 0;
  width: 1.5rem;
  height: 1.5rem;
`;

const StyledChatGPTIcon = styled.div`
  color: #0d0d0d;
  background-color: #fff;
  border-radius: 9999px;
  justify-content: center;
  align-items: center;
  height: 100%;
  display: flex;
  position: relative;
`;

const StyledChatGPTText = styled.div`
  color: #0d0d0d;
  font-size: .875rem;
  line-height: 1.25rem;
  white-space: nowrap;
  overflow: hidden;
  flex-grow: 1;
`;

const StyledChatGPTNewChatIconContainer = styled.div`
  gap: .5rem;
  display: flex;
`;

const StyledChatGPTNewChatIcon = styled.span`
  align-items: center;
  display: flex;
`;

const StyledChatGPTNewChatButton = styled.button`  
  color: #7d7d7d;
  cursor: pointer;
  -webkit-appearance: button;
  background-color: transparent;
  background-image: none;
  text-transform: none;
  font-size: 100%;
  margin: 0;
  padding: 0;
  border: 0;
`

const InvisibleH2 = styled.h2`
  clip: rect(0px, 0px, 0px, 0px);
  overflow: hidden;
  position: absolute;
`;

// TODO: Split into new file
const ChatGPTNewChat = () => {
  const [showIcon, setShowIcon] = useState(false);
  const [showIconTextBlack, setShowIconTextBlack] = useState(false);
  
  const hoverHandler = useCallback(() => {
    setShowIcon(true);
  }, [setShowIcon])

  const leaveHandler = useCallback(() => {
    setShowIcon(false);
  }, [setShowIcon])

  const iconHoverHandler = useCallback(() => {
    setShowIconTextBlack(true);
  }, [setShowIcon])

  const iconLeaveHandler = useCallback(() => {
    setShowIconTextBlack(false);
  }, [setShowIcon])

  return (
    <StyledChatGPTButton onMouseEnter={hoverHandler} onMouseLeave={leaveHandler}>
      <StyledChatGPTIconContainer>
        <StyledChatGPTIcon>
          <StyledSVG style={{
              width: "66.666667%",
              height: "66.666667%"
            }} width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg" role="img"><text x="-9999" y="-9999">ChatGPT</text><path d="M37.5324 16.8707C37.9808 15.5241 38.1363 14.0974 37.9886 12.6859C37.8409 11.2744 37.3934 9.91076 36.676 8.68622C35.6126 6.83404 33.9882 5.3676 32.0373 4.4985C30.0864 3.62941 27.9098 3.40259 25.8215 3.85078C24.8796 2.7893 23.7219 1.94125 22.4257 1.36341C21.1295 0.785575 19.7249 0.491269 18.3058 0.500197C16.1708 0.495044 14.0893 1.16803 12.3614 2.42214C10.6335 3.67624 9.34853 5.44666 8.6917 7.47815C7.30085 7.76286 5.98686 8.3414 4.8377 9.17505C3.68854 10.0087 2.73073 11.0782 2.02839 12.312C0.956464 14.1591 0.498905 16.2988 0.721698 18.4228C0.944492 20.5467 1.83612 22.5449 3.268 24.1293C2.81966 25.4759 2.66413 26.9026 2.81182 28.3141C2.95951 29.7256 3.40701 31.0892 4.12437 32.3138C5.18791 34.1659 6.8123 35.6322 8.76321 36.5013C10.7141 37.3704 12.8907 37.5973 14.9789 37.1492C15.9208 38.2107 17.0786 39.0587 18.3747 39.6366C19.6709 40.2144 21.0755 40.5087 22.4946 40.4998C24.6307 40.5054 26.7133 39.8321 28.4418 38.5772C30.1704 37.3223 31.4556 35.5506 32.1119 33.5179C33.5027 33.2332 34.8167 32.6547 35.9659 31.821C37.115 30.9874 38.0728 29.9178 38.7752 28.684C39.8458 26.8371 40.3023 24.6979 40.0789 22.5748C39.8556 20.4517 38.9639 18.4544 37.5324 16.8707ZM22.4978 37.8849C20.7443 37.8874 19.0459 37.2733 17.6994 36.1501C17.7601 36.117 17.8666 36.0586 17.936 36.0161L25.9004 31.4156C26.1003 31.3019 26.2663 31.137 26.3813 30.9378C26.4964 30.7386 26.5563 30.5124 26.5549 30.2825V19.0542L29.9213 20.998C29.9389 21.0068 29.9541 21.0198 29.9656 21.0359C29.977 21.052 29.9842 21.0707 29.9867 21.0902V30.3889C29.9842 32.375 29.1946 34.2791 27.7909 35.6841C26.3872 37.0892 24.4838 37.8806 22.4978 37.8849ZM6.39227 31.0064C5.51397 29.4888 5.19742 27.7107 5.49804 25.9832C5.55718 26.0187 5.66048 26.0818 5.73461 26.1244L13.699 30.7248C13.8975 30.8408 14.1233 30.902 14.3532 30.902C14.583 30.902 14.8088 30.8408 15.0073 30.7248L24.731 25.1103V28.9979C24.7321 29.0177 24.7283 29.0376 24.7199 29.0556C24.7115 29.0736 24.6988 29.0893 24.6829 29.1012L16.6317 33.7497C14.9096 34.7416 12.8643 35.0097 10.9447 34.4954C9.02506 33.9811 7.38785 32.7263 6.39227 31.0064ZM4.29707 13.6194C5.17156 12.0998 6.55279 10.9364 8.19885 10.3327C8.19885 10.4013 8.19491 10.5228 8.19491 10.6071V19.808C8.19351 20.0378 8.25334 20.2638 8.36823 20.4629C8.48312 20.6619 8.64893 20.8267 8.84863 20.9404L18.5723 26.5542L15.206 28.4979C15.1894 28.5089 15.1703 28.5155 15.1505 28.5173C15.1307 28.5191 15.1107 28.516 15.0924 28.5082L7.04046 23.8557C5.32135 22.8601 4.06716 21.2235 3.55289 19.3046C3.03862 17.3858 3.30624 15.3413 4.29707 13.6194ZM31.955 20.0556L22.2312 14.4411L25.5976 12.4981C25.6142 12.4872 25.6333 12.4805 25.6531 12.4787C25.6729 12.4769 25.6928 12.4801 25.7111 12.4879L33.7631 17.1364C34.9967 17.849 36.0017 18.8982 36.6606 20.1613C37.3194 21.4244 37.6047 22.849 37.4832 24.2684C37.3617 25.6878 36.8382 27.0432 35.9743 28.1759C35.1103 29.3086 33.9415 30.1717 32.6047 30.6641C32.6047 30.5947 32.6047 30.4733 32.6047 30.3889V21.188C32.6066 20.9586 32.5474 20.7328 32.4332 20.5338C32.319 20.3348 32.154 20.1698 31.955 20.0556ZM35.3055 15.0128C35.2464 14.9765 35.1431 14.9142 35.069 14.8717L27.1045 10.2712C26.906 10.1554 26.6803 10.0943 26.4504 10.0943C26.2206 10.0943 25.9948 10.1554 25.7963 10.2712L16.0726 15.8858V11.9982C16.0715 11.9783 16.0753 11.9585 16.0837 11.9405C16.0921 11.9225 16.1048 11.9068 16.1207 11.8949L24.1719 7.25025C25.4053 6.53903 26.8158 6.19376 28.2383 6.25482C29.6608 6.31589 31.0364 6.78077 32.2044 7.59508C33.3723 8.40939 34.2842 9.53945 34.8334 10.8531C35.3826 12.1667 35.5464 13.6095 35.3055 15.0128ZM14.2424 21.9419L10.8752 19.9981C10.8576 19.9893 10.8423 19.9763 10.8309 19.9602C10.8195 19.9441 10.8122 19.9254 10.8098 19.9058V10.6071C10.8107 9.18295 11.2173 7.78848 11.9819 6.58696C12.7466 5.38544 13.8377 4.42659 15.1275 3.82264C16.4173 3.21869 17.8524 2.99464 19.2649 3.1767C20.6775 3.35876 22.0089 3.93941 23.1034 4.85067C23.0427 4.88379 22.937 4.94215 22.8668 4.98473L14.9024 9.58517C14.7025 9.69878 14.5366 9.86356 14.4215 10.0626C14.3065 10.2616 14.2466 10.4877 14.2479 10.7175L14.2424 21.9419ZM16.071 17.9991L20.4018 15.4978L24.7325 17.9975V22.9985L20.4018 25.4983L16.071 22.9985V17.9991Z" fill="currentColor"></path>
          </StyledSVG>
        </StyledChatGPTIcon>
      </StyledChatGPTIconContainer>
      <StyledChatGPTText>ChatGPT</StyledChatGPTText>
      { showIcon && 
        <StyledChatGPTNewChatIconContainer onMouseEnter={iconHoverHandler} onMouseLeave={iconLeaveHandler}>
          <StyledChatGPTNewChatIcon>
            <StyledChatGPTNewChatButton style={{
              color: showIconTextBlack ? "#0d0d0d" : "#7d7d7d"
            }}>
              <StyledSVG 
                style={{
                  flexShrink: 0,
                  height: "18px",
                  width: "18px",
                  strokeWidth: "1.5",
                  display: "block",
                  verticalAlign: "middle",
                }} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.6729 3.91287C16.8918 2.69392 18.8682 2.69392 20.0871 3.91287C21.3061 5.13182 21.3061 7.10813 20.0871 8.32708L14.1499 14.2643C13.3849 15.0293 12.3925 15.5255 11.3215 15.6785L9.14142 15.9899C8.82983 16.0344 8.51546 15.9297 8.29289 15.7071C8.07033 15.4845 7.96554 15.1701 8.01005 14.8586L8.32149 12.6785C8.47449 11.6075 8.97072 10.615 9.7357 9.85006L15.6729 3.91287ZM18.6729 5.32708C18.235 4.88918 17.525 4.88918 17.0871 5.32708L11.1499 11.2643C10.6909 11.7233 10.3932 12.3187 10.3014 12.9613L10.1785 13.8215L11.0386 13.6986C11.6812 13.6068 12.2767 13.3091 12.7357 12.8501L18.6729 6.91287C19.1108 6.47497 19.1108 5.76499 18.6729 5.32708ZM11 3.99929C11.0004 4.55157 10.5531 4.99963 10.0008 5.00007C9.00227 5.00084 8.29769 5.00827 7.74651 5.06064C7.20685 5.11191 6.88488 5.20117 6.63803 5.32695C6.07354 5.61457 5.6146 6.07351 5.32698 6.63799C5.19279 6.90135 5.10062 7.24904 5.05118 7.8542C5.00078 8.47105 5 9.26336 5 10.4V13.6C5 14.7366 5.00078 15.5289 5.05118 16.1457C5.10062 16.7509 5.19279 17.0986 5.32698 17.3619C5.6146 17.9264 6.07354 18.3854 6.63803 18.673C6.90138 18.8072 7.24907 18.8993 7.85424 18.9488C8.47108 18.9992 9.26339 19 10.4 19H13.6C14.7366 19 15.5289 18.9992 16.1458 18.9488C16.7509 18.8993 17.0986 18.8072 17.362 18.673C17.9265 18.3854 18.3854 17.9264 18.673 17.3619C18.7988 17.1151 18.8881 16.7931 18.9393 16.2535C18.9917 15.7023 18.9991 14.9977 18.9999 13.9992C19.0003 13.4469 19.4484 12.9995 20.0007 13C20.553 13.0004 21.0003 13.4485 20.9999 14.0007C20.9991 14.9789 20.9932 15.7808 20.9304 16.4426C20.8664 17.116 20.7385 17.7136 20.455 18.2699C19.9757 19.2107 19.2108 19.9756 18.27 20.455C17.6777 20.7568 17.0375 20.8826 16.3086 20.9421C15.6008 21 14.7266 21 13.6428 21H10.3572C9.27339 21 8.39925 21 7.69138 20.9421C6.96253 20.8826 6.32234 20.7568 5.73005 20.455C4.78924 19.9756 4.02433 19.2107 3.54497 18.2699C3.24318 17.6776 3.11737 17.0374 3.05782 16.3086C2.99998 15.6007 2.99999 14.7266 3 13.6428V10.3572C2.99999 9.27337 2.99998 8.39922 3.05782 7.69134C3.11737 6.96249 3.24318 6.3223 3.54497 5.73001C4.02433 4.7892 4.78924 4.0243 5.73005 3.54493C6.28633 3.26149 6.88399 3.13358 7.55735 3.06961C8.21919 3.00673 9.02103 3.00083 9.99922 3.00007C10.5515 2.99964 10.9996 3.447 11 3.99929Z" fill="currentColor"></path>
              </StyledSVG>
            </StyledChatGPTNewChatButton>
          </StyledChatGPTNewChatIcon>
        </StyledChatGPTNewChatIconContainer>
      }
    </StyledChatGPTButton>
  );
}

const Sidebar = () => {
  return (
    <StyledSidebarDrawer>
      <InvisibleH2>Chat history</InvisibleH2>
      <StyledSidebarNav>
        <StyledButtonBarSection>
          <ButtonBar />
        </StyledButtonBarSection>
        <StyledChatGPTSection tabIndex={0}>
          <ChatGPTNewChat />
        </StyledChatGPTSection>
      </StyledSidebarNav>
    </StyledSidebarDrawer>
  );
};

export default Sidebar;
