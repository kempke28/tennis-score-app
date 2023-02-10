import React from 'react';
import { StyledTable, TableBody, TableRow, TableHead, TableData } from './style/style';

export default function TableScore({ children, ...props }) {
  return <StyledTable {...props}>{children}</StyledTable>;
}

TableScore.TableBody = function TableScoreBody({ children, ...props }) {
  return <TableBody {...props}>{children}</TableBody>;
};

TableScore.TableRow = function TableScoreRow({ children, ...props }) {
  return <TableRow {...props}>{children}</TableRow>;
};

TableScore.TableHead = function TableScoreData({ children, ...props }) {
  return <TableHead {...props}>{children}</TableHead>;
};

TableScore.TableData = function TableScoreData({ children, ...props }) {
  return <TableData {...props}>{children}</TableData>;
};
