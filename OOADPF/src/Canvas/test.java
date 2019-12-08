package Canvas;

import java.util.ArrayList;

public class test {
	
	public static void main(String[] args) {
		canvas a = new canvas();
		
		//测试基本的构造函数
		domain domain1 = new domain(1,1,"chc","11111","ECNU","people");
		machine machine1 = new machine(2,2,"hyh","222222");
		interFace interFace1 = new interFace(domain1,machine1,"line");
		requirement requirement1 = new requirement(4,4,"des");
		reference reference1 = new reference(machine1,requirement1,"requirement");
		
		//测试editInfo函数
		domain1.changePos(3, 3);
		domain1.editInfo("uuuu","second","me","hhh");
		machine1.editInfo("chc","33");
		requirement1.editInfo("cx");
		interFace1.editInfo(machine1,domain1,"second line");
		reference1.displayChangeIsConstrint(true);
		
		//测试slist的正确性
		ArrayList <shape> slist=a.getSlist();
		for(int i=0;i<slist.size();i++) {
			System.out.println(slist.get(i).getHeight()+" "+slist.get(i).getDescription()+" "+slist.get(i).getWidth());
		}
		
		//测试llist的正确性
		ArrayList <line> llist=a.getLlist();
		for(int i=0;i<llist.size();i++) {
			System.out.println(llist.get(i).getType()+llist.get(i).getOrigin()+llist.get(i).getTerminal());
		}
		
		//测试接口的现象更改
		interFace1.displayAddPhonomenon("buttomon");
		interactionPhenomenon p= (interactionPhenomenon)interFace1.Phenomenon;
		for(int i=0;i<p.pList.size();i++) {
			System.out.println(p.pList.get(i));
		}
		interFace1.displayAddPhonomenon("buttomoff");
		for(int i=0;i<p.pList.size();i++) {
			System.out.println(p.pList.get(i));
		}
		interFace1.displayMinusPhonomenon("buttomon");
		for(int i=0;i<p.pList.size();i++) {
			System.out.println(p.pList.get(i));
		}
		
		//测试引用的现象更改
		reference1.displayAddPhonomenon("buttomon");
		conInteractionPhenomenon p1= (conInteractionPhenomenon)reference1.Phenomenon;
		System.out.println(p1.isConstraint);
		for(int i=0;i<p1.pList.size();i++) {
			System.out.println(p1.pList.get(i));
		}
		reference1.displayAddPhonomenon("buttomoff");
		for(int i=0;i<p1.pList.size();i++) {
			System.out.println(p1.pList.get(i));
		}
		reference1.displayMinusPhonomenon("buttomon");
		for(int i=0;i<p1.pList.size();i++) {
			System.out.println(p1.pList.get(i));
		}
	}

}
