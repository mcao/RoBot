module.exports = {
	main: function(bot, msg) {
		const isCommander = ["171319044715053057", "180094452860321793"];
		if (msg.member.hasPermission('MANAGE_ROLES_OR_PERMISSIONS') === true || msg.member.hasPermission('ADMINISTRATOR') === true || isCommander.indexOf(msg.author.id) > -1) {
			var user = msg.mentions.users.array()[0];
			var roleToGive = msg.content.split(" ").splice(1).join(" ");
			roleToGive = roleToGive.trim();
			let role = msg.guild.roles.find("name", roleToGive);
			if (!role) {
				msg.channel.sendMessage("Role does not exist.");
				return;
			}
			var member = msg.guild.members.get(user.id);
			member.addRole(role).catch(console.error);
			msg.channel.sendMessage("Successfully added role " + roleToGive + " to " + user.username + ".");
		}
	}
};