package Canvas;

public class machine extends shape {
	public double top;
    public double left;
    public String Shortname;
    public String Description;

    public machine(double top, double left,String shortname,String description) {
        this.top = top;
        this.left = left;
        this.Shortname =shortname ;
        this.Description=description;
    }
    
    public void changePos(double top, double left) {
        this.top = top;
        this.left = left;
    }
    
    public void editInfo(String shortname,String description){
		this.Shortname =shortname ;
        this.Description=description;
	}
    
    public String getDescription() {
    	return this.Description;
    }
    public double getTop() {
        return this.top;
    }
    public double getLeft() {
        return this.left;
    }
    public String getShortname() {
        return this.Shortname;
    }


}
