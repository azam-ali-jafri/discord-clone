import { currentProfile } from "@/lib/currentProfile";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function PATCH(req: Request, { params }: { params: { memberId: string } }) {
  try {
    const profile = await currentProfile();
    const { searchParams } = new URL(req.url);
    const { role } = await req.json();

    const serverId = searchParams.get("serverId");

    if (!serverId) return new NextResponse("server id missing", { status: 400 });
    if (!params.memberId) return new NextResponse("member id missing", { status: 400 });

    if (!profile) return new NextResponse("unauthorized", { status: 401 });

    const server = await db.server.update({
      where: {
        id: serverId,
        profileId: profile.id,
      },
      data: {
        members: {
          update: {
            where: {
              id: params.memberId,
              profileId: {
                not: profile.id,
              },
            },
            data: {
              role,
            },
          },
        },
      },
      include: {
        members: {
          include: {
            profile: true,
          },
          orderBy: {
            role: "asc",
          },
        },
      },
    });

    return NextResponse.json(server);
  } catch (error) {
    console.log("MEMBER_ID_ERROR : ", error);
    return new NextResponse("internal error", { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: { memberId: string } }) {
  try {
    const profile = await currentProfile();

    const { searchParams } = new URL(req.url);

    const serverId = searchParams.get("serverId");

    if (!serverId) return new NextResponse("server id missing", { status: 400 });
    if (!params.memberId) return new NextResponse("member id missing", { status: 400 });

    if (!profile) return new NextResponse("unauthorized", { status: 401 });

    const server = await db.server.update({
      where: {
        id: serverId,
        profileId: profile.id,
      },
      data: {
        members: {
          delete: {
            id: params.memberId,
            profileId: {
              not: profile.id,
            },
          },
        },
      },
      include: {
        members: {
          include: {
            profile: true,
          },
          orderBy: {
            role: "asc",
          },
        },
      },
    });

    return NextResponse.json(server);
  } catch (error) {
    console.log("MEMBER_ID_DELETE : ", error);
    return new NextResponse("internal error", { status: 500 });
  }
}
