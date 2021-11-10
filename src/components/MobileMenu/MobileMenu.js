/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import Dialog, { DialogOverlay, DialogContent } from "@reach/dialog";

import { COLORS, QUERIES, WEIGHTS } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";
import { opacify } from "../../utils";

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <MobileMenuOverlay isOpen={isOpen} onDismiss={onDismiss}>
      <MobileMenuDialog aria-label="Menu">
        <CloseButton onClick={onDismiss}>
          <Icon id="close" strokeWidth="2" />
          <VisuallyHidden>Close menu</VisuallyHidden>
        </CloseButton>
        <Grower />
        <MiddleNav>
          <a href="/sale">Sale</a>
          <a href="/new">New&nbsp;Releases</a>
          <a href="/men">Men</a>
          <a href="/women">Women</a>
          <a href="/kids">Kids</a>
          <a href="/collections">Collections</a>
        </MiddleNav>
        <FooterNav>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </FooterNav>
      </MobileMenuDialog>
    </MobileMenuOverlay>
  );
};

const MobileMenuDialog = styled(DialogContent)`
  background-color: var(--color-white);
  position: absolute;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 32px;
`;

const MobileMenuOverlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  background-color: var(--color-modal-backdrop);
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 0;
  right: 0;
  padding-top: 26px;
  padding-right: 26px;
`;

const MiddleNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;

  a {
    color: var(--color-gray-900);
    text-decoration: none;
    text-transform: uppercase;
    font-size: ${18 / 16}rem;
    line-height: ${21 / 16}rem;
    font-weight: ${WEIGHTS.medium};
  }

  a:hover {
    color: var(--color-secondary);
  }
`;

const FooterNav = styled.footer`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: flex-end;
  gap: 14px;

  a {
    color: var(--color-gray-700);
    text-decoration: none;
    font-size: ${14 / 16}rem;
    line-height: 1rem;
  }
`;

const Grower = styled.div`
  flex: 1;
`;

export default MobileMenu;
