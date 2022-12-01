import React from 'react';
import { StyledTable, TableBody, TableRow, TableHead, TableData } from './style/style';

export default function TableScore({ children, ...props }) {
  return <StyledTable>{children}</StyledTable>;
}

TableScore.TableBody = function TableScoreBody({ children }) {
  return <TableBody>{children}</TableBody>;
};

TableScore.TableRow = function TableScoreRow({ children }) {
  return <TableRow>{children}</TableRow>;
};

TableScore.TableHead = function TableScoreData({ children }) {
  return <TableHead>{children}</TableHead>;
};

TableScore.TableData = function TableScoreData({ children }) {
  return <TableData>{children}</TableData>;
};
