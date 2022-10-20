package blockchain;

import java.util.ArrayList;
//import com.google.gson.GsonBuilder;

public class BlockChain{
	
	public static ArrayList<Block> blockchain = new ArrayList<Block>();
	public static int difficulty = 5;

	public static void main(String[] args) {	
		//add blocks to the blockchain ArrayList:
		
		System.out.println("\nMining Gensis Block in process ... ");
		addBlock(new Block("Genesis Block successfully created: ", "0"));
		
		System.out.println("\nMining Block 2 in process ... ");
		addBlock(new Block("Block 2 successfully created: ",blockchain.get(blockchain.size()-1).hash));
		
		System.out.println("\nMining Block 3 in process... ");
		addBlock(new Block("Block 3 successfully created: ",blockchain.get(blockchain.size()-1).hash));

		System.out.println("\nAll blocks created!");
		System.out.println("\nConfirm Blockchain is valid: " + isChainValid());
		
		//String blockchainJson = StringUtil.getJson(blockchain);
		// System.out.println("\nThe block chain: ");
		// System.out.println(blockchainJson);
	}
	
	public static Boolean isChainValid() {
		Block currentBlock; 
		Block previousBlock;
		String hashTarget = new String(new char[difficulty]).replace('\0', '0');
		
		//loop through blockchain to check hashes:
		for(int i=1; i < blockchain.size(); i++) {
			currentBlock = blockchain.get(i);
			previousBlock = blockchain.get(i-1);
			//compare registered hash and calculated hash:
			if(!currentBlock.hash.equals(currentBlock.calculateHash()) ){
				System.out.println("Current Hashes not equal");			
				return false;
			}
			//compare previous hash and registered previous hash
			if(!previousBlock.hash.equals(currentBlock.previousHash) ) {
				System.out.println("Previous Hashes not equal");
				return false;
			}
			//check if hash is solved
			if(!currentBlock.hash.substring( 0, difficulty).equals(hashTarget)) {
				System.out.println("This block hasn't been mined");
				return false;
			}
			
		}
		return true;
	}
	
	public static void addBlock(Block newBlock) {
		newBlock.mineBlock(difficulty);
		blockchain.add(newBlock);
	}
}
