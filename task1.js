class vehlicle
{
    constructor(color = "bule", number = 4, horn = "beep beep")
    {
        this.color = color;
        this.number = number;
        this.horn = horn;
    }
    honkHorn()
    {
        console.log(this.horn);
    }
}
class Bicycle extends vehlicle
{
    constructor(color = "blue")
    {
        super(color, 2, "honk honk")
    }
}
