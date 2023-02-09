import React from 'react';
import { StyledButton, SettingsButton, ScoringButton } from './style/button';

export default function Button({ children, ...props }) {
    return <StyledButton {...props}>{children}</StyledButton>;
}

Button.SetttingsButton = function SetButton({ children, ...Props }) {
    return <SettingsButton {...Props}>{children}</SettingsButton>;
};

Button.ScoringButton = function ScoreButton({ children, ...props }) {
    return <ScoringButton {...props}>{children}</ScoringButton>;
};

