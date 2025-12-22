import React from 'react';

export interface Properties {
	id: string;
	image: string;
	title: string;
	description: React.ReactNode
}

export const infoData: Properties[] = [
	{
		id: "first-info",
		image: "/dinos/confused_orpheus.png",
		title: "Roblox.. really?!?!",
		description: (
			<>
				Yeah we know. <i>That</i> Roblox. Powering those memes and obbies is a surprisingly powerful game engine.<br /><br />
				Multiplayer, physics, UI, data storage - all out of the box. There's no servers to manage or an engine configuration rabbit hole to lose yourself in. Infrastructure? Not your problem!<br /><br />
				It's one of the fastest ways to go from "what if?" to a playable multiplayer game, even if you're new to game dev!
			</>
		),
	},
	{
		id: "second-info",
		image: "/dinos/dino_hesitating.png",
		title: "Okay.. but I don't know anything!!",
		description: (
			<>
				and that's okay!<br /><br />
				If you've had your eyes on some LEGO® recently, Bricklayer is the YSWS for you!<br /><br />
				Roblox Studio is approachable, the docs are solid (no seriously, it's really detailed), and tons of tutorials and guides out there!<br /><br />
				Learn from ground-zero and lay the bricks!
			</>
		)
	},
	{
		id: "third-info",
		image: "/dinos/dino_sees_something_she_wants.png",
		title: "Wait.. LEGO® did YOU SAY!?!?",
		description: (
			<>
				Yes. Actual, real-life bricks.<br /><br />
				Ship a project for Bricklayer and earn some building blocks.<br /><br />
				(Depending on where you live), that could mean some LEGO® sets, boxes of loose bricks, or alternatives like Cobi, Mould King, or Reobrix. Add in Blahajs and stickers for joy!<br /><br />
				You build a world in code.<br />
				We ship you something you can build in real life!
			</>
		)
	},
]
