/*
*
* This file is part of xVideoServiceThief,
* an open-source cross-platform Video service download
*
* Copyright (C) 2007 - 2009 Xesc & Technology
*
* This program is free software: you can redistribute it and/or modify
* it under the terms of the GNU General Public License as published by
* the Free Software Foundation, either version 3 of the License, or
* (at your option) any later version.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License
* along with xVideoServiceThief. If not, see <http://www.gnu.org/licenses/>.
*
* Contact e-mail: Xesc <xeskuu.xvst@gmail.com>
* Program URL   : http://xviservicethief.sourceforge.net/
*
*/

function RegistVideoService()
{
	this.version = "1.0.0";
	this.minVersion = "2.0.0a";
	this.author = "Xesc & Technology 2009";
	this.website = "http://www.zappinternet.com/";
	this.ID = "zappinternet.com";
	this.caption = "ZappInternet";
	this.adultContent = false;
	this.musicSite = false;
}

function getVideoInformation(url)
{
	const URL_GET_XML = "http://www.zappinternet.com/get_playlist.php?idvideo=%1";
	// video information
	var result = new VideoDefinition();
	// get video id from url
	var vidId = copyBetween(url, "video/", "/");
	// download xml
	var http = new Http();
	var xml = http.downloadWebpage(strFormat(URL_GET_XML, vidId));
	// get the video information
	result.title = copyBetween(xml, "<title>", "</title>");
	result.URL = copyBetween(xml, "url=\"", "\"");
	// return the video information
	return result;
}

function getVideoServiceIcon()
{
	return new Array(
		0x89,0x50,0x4e,0x47,0x0d,0x0a,0x1a,0x0a,0x00,0x00,0x00,0x0d,0x49,0x48,0x44,0x52,
		0x00,0x00,0x00,0x10,0x00,0x00,0x00,0x10,0x08,0x06,0x00,0x00,0x00,0x1f,0xf3,0xff,
		0x61,0x00,0x00,0x01,0xff,0x49,0x44,0x41,0x54,0x78,0xda,0x7d,0x93,0xcf,0x8b,0x52,
		0x51,0x14,0xc7,0x9f,0xe2,0x4f,0x42,0xc8,0xfa,0x13,0x44,0x84,0x48,0xd4,0x36,0x62,
		0x0b,0x37,0x82,0x0b,0x45,0x70,0xa9,0x8b,0xd2,0x45,0x08,0x21,0x12,0x0a,0x2d,0x5a,
		0x4c,0x82,0x2b,0x6b,0x90,0x14,0x77,0x3a,0x30,0x10,0x2a,0x2d,0x46,0xdc,0x8c,0x20,
		0xc5,0xb3,0x30,0x95,0x2c,0x46,0x42,0x65,0x68,0xa1,0x44,0x9b,0x59,0x34,0x20,0xb8,
		0x09,0xdf,0xbc,0xd1,0x6f,0xbd,0x63,0xef,0x81,0x3c,0xde,0x7c,0xe1,0x72,0xdf,0xf9,
		0xde,0x7b,0x3f,0xf7,0x9d,0xc3,0xb9,0x0c,0xfe,0xab,0x5c,0x2e,0xc3,0x6e,0xb7,0xef,
		0x8d,0x4a,0xa5,0x82,0xf7,0x3f,0x37,0xb8,0x7f,0x74,0x85,0x3b,0x45,0x0e,0xcf,0x3e,
		0xf0,0x78,0x70,0xcc,0xe1,0xdd,0xf9,0x06,0xa2,0x24,0x40,0xb3,0xd9,0x44,0x38,0x1c,
		0x46,0x30,0x18,0x84,0x5a,0xad,0x86,0x5e,0xaf,0x47,0x93,0xfd,0x8a,0x5b,0x85,0x35,
		0xee,0x96,0x38,0x3c,0x3a,0xe5,0x71,0xfb,0x0d,0x07,0x26,0xbf,0xc6,0x41,0x8f,0x97,
		0x01,0x24,0xe5,0x72,0x39,0x30,0x0c,0x83,0x7c,0x3e,0x8f,0xd7,0x5f,0xae,0xe9,0xc0,
		0xc9,0x8f,0xdd,0x8d,0x6f,0x67,0x9b,0x9b,0x01,0x83,0xc1,0x00,0x3a,0x9d,0x0e,0x3e,
		0x9f,0x0f,0x3c,0xcf,0xe3,0x79,0x97,0xa7,0x03,0xd3,0xcb,0x2d,0xad,0x7f,0xbb,0xd8,
		0x2a,0x03,0x56,0xab,0x15,0xac,0x56,0x2b,0xcc,0x66,0x33,0x16,0x8b,0x05,0x38,0x8e,
		0xc3,0xd1,0xf7,0x1d,0xe0,0xc5,0x27,0x1e,0x57,0x1b,0x20,0xc3,0xf2,0xca,0x80,0x54,
		0x2a,0x25,0xfc,0xfa,0xde,0x78,0xfc,0xe4,0x29,0xee,0x55,0x29,0x6f,0xaa,0x85,0xee,
		0x70,0x4d,0xdf,0x2f,0x3f,0x5f,0xcb,0x01,0xed,0x76,0x1b,0xc9,0x64,0x12,0xd9,0x6c,
		0x16,0x91,0x48,0x04,0x89,0x44,0x02,0xdd,0x6e,0x17,0xe7,0xbf,0x7e,0xe3,0xe0,0xe3,
		0x1f,0x3c,0x3c,0x3c,0x43,0xeb,0xec,0x02,0xaf,0xfe,0xd5,0x65,0x76,0xb9,0x95,0x03,
		0x0a,0x85,0x02,0x55,0xde,0xed,0x76,0xd3,0xed,0x1a,0x8d,0x06,0x36,0x9b,0x0d,0x26,
		0x93,0x09,0x4e,0xa7,0x53,0xf0,0x68,0xbd,0x58,0x2c,0x02,0x80,0x1c,0x90,0x4e,0xa7,
		0x69,0x93,0xcb,0xe5,0x42,0xb5,0x5a,0x85,0xc3,0xe1,0x90,0x52,0xf1,0x7a,0xbd,0xe4,
		0x59,0x2c,0x16,0x68,0xb5,0x5a,0xaa,0x91,0x22,0x80,0x65,0x59,0x21,0xa4,0x59,0x04,
		0xcc,0x66,0x33,0xf2,0xea,0xf5,0xba,0x10,0x13,0x4c,0x11,0xd0,0xef,0xf7,0x29,0x1e,
		0x8d,0x46,0x12,0x60,0x3e,0x9f,0x93,0xd7,0x6a,0xb5,0x28,0x2e,0x95,0x4a,0xca,0x00,
		0xbf,0xdf,0x8f,0xe1,0x70,0x88,0x40,0x20,0x20,0x01,0xa2,0xd1,0x28,0xf5,0x88,0xc7,
		0xe3,0xa1,0x2e,0x1d,0x8f,0xc7,0xca,0x00,0x83,0xc1,0x20,0x1d,0x34,0x1a,0x8d,0x7b,
		0xb3,0x4a,0xa5,0x42,0x26,0x93,0x01,0xe9,0xa6,0x1a,0x34,0x1a,0x0d,0xf4,0x7a,0x3d,
		0xc4,0x62,0x31,0xf2,0xa6,0xd3,0xa9,0x90,0x3f,0xa5,0xb5,0x93,0x1c,0x20,0x90,0x69,
		0xf3,0x64,0x32,0x81,0xa8,0x78,0x3c,0x4e,0xde,0x72,0xb9,0x14,0x2d,0x65,0x40,0xa7,
		0xd3,0x11,0x5e,0x22,0xb5,0xb4,0xa8,0x5a,0xad,0x86,0x50,0x28,0x44,0x6d,0x2d,0x6a,
		0x8b,0x7d,0xfd,0x05,0xc2,0xee,0xe3,0x1e,0x03,0x1d,0x66,0x2f,0x00,0x00,0x00,0x00,
		0x49,0x45,0x4e,0x44,0xae,0x42,0x60,0x82);
}
