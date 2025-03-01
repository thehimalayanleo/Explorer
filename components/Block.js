import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Container, Typography } from '@mui/material'


export default function Block(props) {
	/**
	 * So props.blockInfo contains all the info about the block
	 * Just go through the rows and add a cell with the info
	 * For example, timestamp would be props.blockInfo.timestamp
	 * You can check all the info that is returned in the console
	 * in Chrome. I already log the info into the console in the line
	 * below.
	 */
	console.log(props.blockInfo)
	return (
		<React.Fragment>
			<Container component="main" maxWidth="md" sx={{ mt: 10 }}>
				<Typography component="h5" variant="h5">
					Block Details
				</Typography>
				<Table size="small" id="transactiontable">
					<TableBody>
						<TableRow>
							<TableCell>Block Height</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Timestamp</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Transactions</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Mined by:</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Block Reward</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Uncles Reward</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Difficulty</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Total Difficulty</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Size:</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Gas Used</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Gas Limit</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Base fee Per Gas</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Burnt Fees</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Extra Data</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</Container>
		</React.Fragment>
	);
}