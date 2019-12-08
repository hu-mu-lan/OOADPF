package Canvas;

public class test {
	private int a = 0;
	
	public void setA(int num) {
		this.a = num;
	}
	
	public int getA() {
		return a;
	}
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println("gggg");
		canvas a = new canvas();
		domain do1 = new domain(1,2,"chc","15151515");
		a.display();
		do1.editInfo(Description, ShortName, Property, Type);
		a.display();
	}

}
